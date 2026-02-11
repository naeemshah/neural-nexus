const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NAEToken", function () {
  let NAE;
  let nae;
  let owner;
  let addr1;
  let addr2;
  let ecoAddr;
  const initialSupply = ethers.parseEther("1000000000");

  beforeEach(async function () {
    [owner, addr1, addr2, ecoAddr] = await ethers.getSigners();
    NAE = await ethers.getContractFactory("NAEToken");
    nae = await NAE.deploy();
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await nae.owner()).to.equal(owner.address);
    });

    it("Should assign the total supply of tokens to the owner", async function () {
      const ownerBalance = await nae.balanceOf(owner.address);
      expect(await nae.totalSupply()).to.equal(ownerBalance);
    });
  });

  describe("Ecosystem Burn", function () {
    it("Should apply 25% burn when transferring to an ecosystem address", async function () {
      const transferAmount = ethers.parseEther("1000");
      const expectedBurn = (transferAmount * 2500n) / 10000n;
      const expectedTransfer = transferAmount - expectedBurn;

      await nae.setEcosystemAddress(ecoAddr.address, true);

      // Transfer from owner to addr1 (no burn)
      await nae.transfer(addr1.address, transferAmount);
      expect(await nae.balanceOf(addr1.address)).to.equal(transferAmount);

      const initialSupply = await nae.totalSupply();
      
      // Transfer from addr1 to ecoAddr (burn)
      await nae.connect(addr1).transfer(ecoAddr.address, transferAmount);

      expect(await nae.balanceOf(ecoAddr.address)).to.equal(expectedTransfer);
      expect(await nae.totalSupply()).to.equal(initialSupply - expectedBurn);
    });

    it("Should apply 25% burn when transferring from an ecosystem address", async function () {
      const transferAmount = ethers.parseEther("1000");
      await nae.setEcosystemAddress(ecoAddr.address, true);

      // Send tokens to ecoAddr first (burn applied)
      await nae.transfer(ecoAddr.address, transferAmount);
      const ecoBalance = await nae.balanceOf(ecoAddr.address);

      const initialSupply = await nae.totalSupply();
      const expectedBurn = (ecoBalance * 2500n) / 10000n;
      const expectedTransfer = ecoBalance - expectedBurn;

      // Transfer from ecoAddr to addr2 (burn applied)
      await nae.connect(ecoAddr).transfer(addr2.address, ecoBalance);

      expect(await nae.balanceOf(addr2.address)).to.equal(expectedTransfer);
      expect(await nae.totalSupply()).to.equal(initialSupply - expectedBurn);
    });
  });
});
