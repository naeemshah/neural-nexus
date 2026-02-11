const { ethers } = require("hardhat");

async function main() {
  console.log("Deploying NAE Token...");

  const NAE = await ethers.getContractFactory("NAEToken");
  const nae = await NAE.deploy();

  await nae.waitForDeployment();

  console.log("NAE Token deployed to:", await nae.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
