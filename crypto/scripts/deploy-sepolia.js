const { ethers, run } = require("hardhat");
const chalk = require("chalk");

async function main() {
  console.log(chalk.blue("🚀 Starting NAE Token deployment to Base Sepolia..."));
  
  // Get deployer account
  const [deployer] = await ethers.getSigners();
  console.log(chalk.yellow(`📝 Deployer address: ${deployer.address}`));
  
  // Check balance
  const balance = await ethers.provider.getBalance(deployer.address);
  console.log(chalk.yellow(`💰 Deployer balance: ${ethers.formatEther(balance)} ETH`));
  
  if (balance < ethers.parseEther("0.01")) {
    console.log(chalk.red("❌ Insufficient balance for deployment. Please fund the account."));
    process.exit(1);
  }
  
  // Deploy contract
  console.log(chalk.blue("📦 Deploying NAE Token contract..."));
  const initialSupply = 1000000; // 1 million tokens
  const NAE = await ethers.getContractFactory("NAE_Token");
  const nae = await NAE.deploy(initialSupply);
  
  console.log(chalk.yellow(`⏳ Waiting for deployment confirmation...`));
  await nae.waitForDeployment();
  
  const address = await nae.getAddress();
  console.log(chalk.green(`✅ NAE Token deployed to: ${address}`));
  
  // Get deployment details
  const tx = nae.deploymentTransaction();
  console.log(chalk.yellow(`📄 Transaction hash: ${tx.hash}`));
  
  // Wait for a few blocks
  console.log(chalk.blue("⏳ Waiting for 5 block confirmations..."));
  await tx.wait(5);
  
  // Verify contract
  console.log(chalk.blue("🔍 Verifying contract on BaseScan..."));
  try {
    await run("verify:verify", {
      address: address,
      constructorArguments: [initialSupply],
    });
    console.log(chalk.green("✅ Contract verified successfully!"));
  } catch (error) {
    if (error.message.toLowerCase().includes("already verified")) {
      console.log(chalk.yellow("⚠️  Contract already verified"));
    } else {
      console.log(chalk.red(`❌ Verification failed: ${error.message}`));
    }
  }
  
  // Check contract details
  console.log(chalk.blue("📊 Checking contract details..."));
  const name = await nae.name();
  const symbol = await nae.symbol();
  const totalSupply = await nae.totalSupply();
  const owner = await nae.owner();
  const burnRate = await nae.BURN_RATE();
  
  console.log(chalk.green(`📝 Token Name: ${name}`));
  console.log(chalk.green(`🔤 Token Symbol: ${symbol}`));
  console.log(chalk.green(`📈 Total Supply: ${ethers.formatUnits(totalSupply, 18)} ${symbol}`));
  console.log(chalk.green(`👑 Owner: ${owner}`));
  console.log(chalk.green(`🔥 Burn Rate: ${burnRate / 100}%`));
  
  // Generate verification link
  const baseScanUrl = `https://sepolia.basescan.org/address/${address}`;
  console.log(chalk.cyan(`🔗 BaseScan URL: ${baseScanUrl}`));
  
  // Save deployment info
  const deploymentInfo = {
    network: "base-sepolia",
    contractAddress: address,
    deployer: deployer.address,
    transactionHash: tx.hash,
    initialSupply: initialSupply,
    timestamp: new Date().toISOString(),
    verificationUrl: baseScanUrl,
    tokenDetails: {
      name: name,
      symbol: symbol,
      totalSupply: ethers.formatUnits(totalSupply, 18),
      owner: owner,
      burnRate: `${burnRate / 100}%`
    }
  };
  
  console.log(chalk.blue("💾 Saving deployment info..."));
  const fs = require("fs");
  fs.writeFileSync(
    "deployment-info.json",
    JSON.stringify(deploymentInfo, null, 2)
  );
  
  console.log(chalk.green("🎉 Deployment completed successfully!"));
  
  // Professional Security Audit Instructions
  console.log(chalk.cyan("========================================="));
  console.log(chalk.cyan("🔐 PROFESSIONAL SECURITY AUDIT REQUIRED"));
  console.log(chalk.cyan("========================================="));
  console.log(chalk.yellow("Run security audit with Eyebot AuditBot:"));
  console.log(chalk.white(`   eyebot auditbot scan ${address}`));
  console.log(chalk.yellow("For full deep audit:"));
  console.log(chalk.white(`   eyebot auditbot audit ${address} --deep`));
  console.log(chalk.cyan("========================================="));
  
  console.log(chalk.cyan(`📋 Deployment Summary:`));
  console.log(chalk.cyan(`   Contract: ${address}`));
  console.log(chalk.cyan(`   Network: Base Sepolia`));
  console.log(chalk.cyan(`   Deployer: ${deployer.address}`));
  console.log(chalk.cyan(`   Supply: ${initialSupply} ${symbol}`));
  console.log(chalk.cyan(`   Verification: ${baseScanUrl}`));
  console.log(chalk.cyan("========================================="));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(chalk.red(`❌ Deployment failed: ${error.message}`));
    console.error(error);
    process.exit(1);
  });