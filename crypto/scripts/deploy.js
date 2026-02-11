const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying NAE Token with account:", deployer.address);

  const initialSupply = 1000000; // 1 million
  const NAE = await ethers.getContractFactory("NAE_Token");
  const nae = await NAE.deploy(initialSupply);

  await nae.waitForDeployment();

  const address = await nae.getAddress();
  console.log("NAE Token deployed to:", address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
