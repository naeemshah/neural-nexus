// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Test} from "forge-std/Test.sol";
import {NAEToken} from "../src/NAE_Token.sol";

contract NAETokenTest is Test {
    NAEToken public token;
    address public owner = address(1);
    address public user1 = address(2);
    address public user2 = address(3);
    address public ecosystem = address(4);

    function setUp() public {
        vm.prank(owner);
        token = new NAEToken();
    }

    function testInitialSupply() public view {
        assertEq(token.totalSupply(), 1_000_000_000 * 10**18);
        assertEq(token.balanceOf(owner), 1_000_000_000 * 10**18);
    }

    function testStandardTransfer() public {
        uint256 amount = 1000 * 10**18;
        vm.prank(owner);
        token.transfer(user1, amount);
        assertEq(token.balanceOf(user1), amount);
    }

    function testEcosystemBurn() public {
        // Setup ecosystem address
        vm.prank(owner);
        token.setEcosystemAddress(ecosystem, true);

        uint256 amount = 1000 * 10**18;
        vm.prank(owner);
        token.transfer(user1, amount); // Move some tokens to user1 first

        // Transfer to ecosystem address should trigger 25% burn
        vm.prank(user1);
        token.transfer(ecosystem, amount);

        uint256 expectedBurn = (amount * 2500) / 10000;
        uint256 expectedReceived = amount - expectedBurn;

        assertEq(token.balanceOf(ecosystem), expectedReceived);
        assertEq(token.totalSupply(), (1_000_000_000 * 10**18) - expectedBurn);
    }
}
