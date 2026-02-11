const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NAE_Token", function () {
  let NAE_Token;
  let naeToken;
  let owner;
  let addr1;
  let addr2;
  const initialSupply = 1000000;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    NAE_Token = await ethers.getContractFactory("NAE_Token");
    naeToken = await NAE_Token.deploy(initialSupply);
  });

  it("Should have correct name and symbol", async function () {
    expect(await naeToken.name()).to.equal("Neural Nexus");
    expect(await naeToken.symbol()).to.equal("NAE");
  });

  it("Should apply burn tax on transfers between non-owners", async function () {
    const transferAmount = ethers.parseEther("1000");
    // Transfer from owner to addr1 (no tax)
    await naeToken.transfer(addr1.address, transferAmount);
    
    const addr1Balance = await naeToken.balanceOf(addr1.address);
    expect(addr1Balance).to.equal(transferAmount);

    // Transfer from addr1 to addr2 (tax applied: 25% of 1000 = 250)
    await naeToken.connect(addr1).transfer(addr2.address, transferAmount);
    
    const taxAmount = (transferAmount * 2500n) / 10000n; // 25% burn
    const expectedAmount = transferAmount - taxAmount;
    
    expect(await naeToken.balanceOf(addr2.address)).to.equal(expectedAmount);
    // Verify burn by checking total supply reduction
    const currentSupply = await naeToken.totalSupply();
    const expectedSupply = ethers.parseEther(initialSupply.toString()) - taxAmount;
    expect(currentSupply).to.equal(expectedSupply);
  });
});
