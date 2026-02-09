const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NAEToken Ecosystem Burn Mechanism", function () {
  let NAEToken;
  let naeToken;
  let owner;
  let ecosystemAddr;
  let user;
  let addr2;

  beforeEach(async function () {
    [owner, ecosystemAddr, user, addr2] = await ethers.getSigners();
    NAEToken = await ethers.getContractFactory("NAEToken");
    naeToken = await NAEToken.deploy();
    // await naeToken.deployed(); // For ethers v5
    // naeToken.target for ethers v6

    // Transfer some tokens to user
    await naeToken.transfer(user.address, ethers.parseEther("1000"));
  });

  describe("Configuration", function () {
    it("Should allow owner to set ecosystem address", async function () {
      await naeToken.setEcosystemAddress(ecosystemAddr.address, true);
      expect(await naeToken.isEcosystemAddress(ecosystemAddr.address)).to.equal(true);
    });

    it("Should NOT allow non-owner to set ecosystem address", async function () {
      await expect(
        naeToken.connect(user).setEcosystemAddress(addr2.address, true)
      ).to.be.revertedWithCustomError(naeToken, "OwnableUnauthorizedAccount");
    });
  });

  describe("Burn Mechanism", function () {
    beforeEach(async function () {
      await naeToken.setEcosystemAddress(ecosystemAddr.address, true);
    });

    it("Should burn 25% when transferring TO an ecosystem address", async function () {
      const amount = ethers.parseEther("100");
      const expectedBurn = ethers.parseEther("25");
      const expectedTransfer = ethers.parseEther("75");

      const initialTotalSupply = await naeToken.totalSupply();
      
      await expect(naeToken.connect(user).transfer(ecosystemAddr.address, amount))
        .to.emit(naeToken, "EcosystemFeeApplied")
        .withArgs(user.address, ecosystemAddr.address, expectedBurn);

      expect(await naeToken.balanceOf(ecosystemAddr.address)).to.equal(expectedTransfer);
      expect(await naeToken.totalSupply()).to.equal(initialTotalSupply - expectedBurn);
    });

    it("Should burn 25% when transferring FROM an ecosystem address", async function () {
      // First fund the ecosystem address
      await naeToken.transfer(ecosystemAddr.address, ethers.parseEther("100"));
      
      const amount = ethers.parseEther("100");
      const expectedBurn = ethers.parseEther("25");
      const expectedTransfer = ethers.parseEther("75");

      const initialTotalSupply = await naeToken.totalSupply();
      
      await naeToken.connect(ecosystemAddr).transfer(user.address, amount);

      // User had 900 left, now receives 75 = 975
      expect(await naeToken.balanceOf(user.address)).to.equal(ethers.parseEther("975"));
      expect(await naeToken.totalSupply()).to.equal(initialTotalSupply - expectedBurn);
    });

    it("Should NOT burn when transferring between non-ecosystem addresses", async function () {
      const amount = ethers.parseEther("100");
      const initialTotalSupply = await naeToken.totalSupply();

      await naeToken.connect(user).transfer(addr2.address, amount);

      expect(await naeToken.balanceOf(addr2.address)).to.equal(amount);
      expect(await naeToken.totalSupply()).to.equal(initialTotalSupply);
    });
  });
});
