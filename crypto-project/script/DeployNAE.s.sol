// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Script} from "forge-std/Script.sol";
import {NAEToken} from "../src/NAE_Token.sol";

/**
 * @title DeployNAE
 * @dev Script to deploy the NAEToken to the Base network (or local/testnet).
 * Usage: forge script script/DeployNAE.s.sol --rpc-url <your_rpc_url> --private-key <your_private_key> --broadcast
 */
contract DeployNAE is Script {
    function setUp() public {}

    function run() public {
        // Retrieve private key from environment or use a placeholder for simulation
        uint256 deployerPrivateKey = vm.envOr("PRIVATE_KEY", uint256(0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80));
        
        vm.startBroadcast(deployerPrivateKey);

        NAEToken naeToken = new NAEToken();

        vm.stopBroadcast();

        // Log the deployed address
        // console.log("NAE Token deployed at:", address(naeToken));
    }
}
