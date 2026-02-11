const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NAE_Token", function () {
  let NAE_Token, naeToken, owner, addr1, addr2;

  beforeEach(async function () {
    NAE_Token = await ethers.getContractFactory("NAE_Token");
    [owner, addr1, addr2] = await ethers.getSigners();
    naeToken = await NAE_Token.deploy(1000000); // 1M tokens
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await naeToken.owner()).to.equal(owner.address);
    });

    it("Should assign the total supply of tokens to the owner", async function () {
      const ownerBalance = await naeToken.balanceOf(owner.address);
      expect(await naeToken.totalSupply()).to.equal(ownerBalance);
    });
  });

  describe("Transactions with Burn Tax", function () {
    it("Should transfer tokens between accounts with 25% burn", async function () {
      const initialSupply = await naeToken.totalSupply();
      const transferAmount = ethers.parseEther("100");
      
      // First, transfer from owner to addr1 (no tax for owner)
      await naeToken.transfer(addr1.address, transferAmount);
      
      const addr1Balance = await naeToken.balanceOf(addr1.address);
      expect(addr1Balance).to.equal(transferAmount); // Owner transfer: no tax
      
      // Now transfer from addr1 to addr2 (tax applied)
      const expectedBurn = (transferAmount * 2500n) / 10000n;
      const expectedReceived = transferAmount - expectedBurn;
      
      await naeToken.connect(addr1).transfer(addr2.address, transferAmount);
      
      const addr2Balance = await naeToken.balanceOf(addr2.address);
      expect(addr2Balance).to.equal(expectedReceived);

      const finalSupply = await naeToken.totalSupply();
      expect(finalSupply).to.equal(initialSupply - expectedBurn);
    });

    it("Should fail if sender doesn't have enough tokens", async function () {
      const initialOwnerBalance = await naeToken.balanceOf(owner.address);
      // Try to send 1 token from addr1 (0 balance) to owner
      await expect(
        naeToken.connect(addr1).transfer(owner.address, 1)
      ).to.be.revertedWithCustomError(naeToken, "ERC20InsufficientBalance");

      // Owner balance should remain the same
      expect(await naeToken.balanceOf(owner.address)).to.equal(initialOwnerBalance);
    });
  });
});
