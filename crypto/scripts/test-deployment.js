const { ethers } = require("hardhat");

async function testDeployment() {
  console.log("🧪 Testing deployment configuration...");
  
  // Check if we can get signers
  try {
    const [deployer] = await ethers.getSigners();
    console.log(`✅ Signers available: ${deployer.address}`);
  } catch (error) {
    console.log(`❌ Cannot get signers: ${error.message}`);
    return false;
  }
  
  // Check network
  try {
    const network = await ethers.provider.getNetwork();
    console.log(`✅ Network: ${network.name} (chainId: ${network.chainId})`);
  } catch (error) {
    console.log(`❌ Network error: ${error.message}`);
    return false;
  }
  
  // Check contract factory
  try {
    const NAE = await ethers.getContractFactory("NAE_Token");
    console.log("✅ Contract factory loaded successfully");
    
    // Estimate deployment gas
    const initialSupply = 1000000;
    const deploymentTx = await NAE.getDeployTransaction(initialSupply);
    const gasEstimate = await ethers.provider.estimateGas(deploymentTx);
    console.log(`✅ Estimated deployment gas: ${gasEstimate.toString()}`);
    
    return true;
  } catch (error) {
    console.log(`❌ Contract factory error: ${error.message}`);
    return false;
  }
}

testDeployment()
  .then((success) => {
    if (success) {
      console.log("🎉 All tests passed! Ready for deployment.");
      process.exit(0);
    } else {
      console.log("❌ Tests failed. Check configuration.");
      process.exit(1);
    }
  })
  .catch((error) => {
    console.error(`💥 Test error: ${error.message}`);
    process.exit(1);
  });