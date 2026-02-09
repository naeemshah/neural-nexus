// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Script, console2} from "forge-std/Script.sol";
import {NAEToken} from "../src/NAE_Token.sol";

/**
 * @title DeployNAE
 * @dev Script to deploy the NAEToken to the Base network (or local/testnet).
 * Usage: forge script script/DeployNAE.s.sol --rpc-url <your_rpc_url> --broadcast --verify
 */
contract DeployNAE is Script {
    function setUp() public {}

    function run() public {
        // Retrieve private key from environment
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        
        vm.startBroadcast(deployerPrivateKey);

        NAEToken naeToken = new NAEToken();

        vm.stopBroadcast();

        console2.log("NAE Token deployed at:", address(naeToken));
    }
}
