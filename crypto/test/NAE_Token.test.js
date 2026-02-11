const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NAE_Token Burn Tax", function () {
  let NAE_Token, naeToken, owner, addr1, addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    NAE_Token = await ethers.getContractFactory("NAE_Token");
    naeToken = await NAE_Token.deploy();
  });

  it("Should not apply tax for owner transfers", async function () {
    const amount = ethers.parseEther("1000");
    await naeToken.transfer(addr1.address, amount);
    expect(await naeToken.balanceOf(addr1.address)).to.equal(amount);
  });

  it("Should apply 25% burn tax for non-owner transfers", async function () {
    const initialAmount = ethers.parseEther("1000");
    // Owner to addr1 (no tax)
    await naeToken.transfer(addr1.address, initialAmount);
    
    const transferAmount = ethers.parseEther("100");
    // addr1 to addr2 (25% tax)
    await naeToken.connect(addr1).transfer(addr2.address, transferAmount);
    
    const expectedTax = (transferAmount * 25n) / 100n;
    const expectedReceived = transferAmount - expectedTax;
    
    expect(await naeToken.balanceOf(addr2.address)).to.equal(expectedReceived);
    // Check if burned (total supply should decrease)
    const initialSupply = await naeToken.totalSupply();
    // Wait, let's just check the supply change
    // Owner minted 1B. 
    // Total supply = 1B * 10^18.
    // Burned amount = 25.
    // We should probably check the balance of address(0) or just the total supply.
    // OpenZeppelin's _update(from, address(0), amount) handles burning (decreasing totalSupply).
  });

  it("Should decrease total supply after taxed transfer", async function () {
    const initialSupply = await naeToken.totalSupply();
    const initialAmount = ethers.parseEther("1000");
    await naeToken.transfer(addr1.address, initialAmount);
    
    const transferAmount = ethers.parseEther("100");
    await naeToken.connect(addr1).transfer(addr2.address, transferAmount);
    
    const expectedBurned = (transferAmount * 25n) / 100n;
    expect(await naeToken.totalSupply()).to.equal(initialSupply - expectedBurned);
  });
});
