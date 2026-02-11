require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    "base-mainnet": {
      url: "https://mainnet.base.org",
      accounts: [process.env.PRIVATE_KEY || ""],
      gasPrice: 1000000000,
    },
    "base-sepolia": {
      url: "https://sepolia.base.org",
      accounts: [process.env.PRIVATE_KEY || ""],
      verify: {
        etherscan: {
          apiUrl: "https://api-sepolia.basescan.org/api",
          apiKey: process.env.BASESCAN_API_KEY,
        }
      }
    },
  },
  etherscan: {
    apiKey: {
      "base-sepolia": process.env.BASESCAN_API_KEY || "",
    },
  },
};
