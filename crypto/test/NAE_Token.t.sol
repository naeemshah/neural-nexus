// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Test.sol";
import "../NAE_Token.sol";

contract NAETokenTest is Test {
    NAEToken public token;
    address public owner = address(0x1);
    address public user1 = address(0x2);
    address public ecosystemAddr = address(0x3);

    function setUp() public {
        vm.prank(owner);
        token = new NAEToken();
    }

    function testInitialSupply() public view {
        assertEq(token.totalSupply(), 1_000_000_000 * 10**18);
        assertEq(token.balanceOf(owner), 1_000_000_000 * 10**18);
    }

    function testSetEcosystemAddress() public {
        vm.prank(owner);
        token.setEcosystemAddress(ecosystemAddr, true);
        assertTrue(token.isEcosystemAddress(ecosystemAddr));
    }

    function testEcosystemBurn() public {
        uint256 transferAmount = 1000 * 10**18;
        uint256 expectedBurn = (transferAmount * 2500) / 10000;
        uint256 expectedTransfer = transferAmount - expectedBurn;

        // Setup ecosystem address
        vm.prank(owner);
        token.setEcosystemAddress(ecosystemAddr, true);

        // Transfer to user1 first (no tax)
        vm.prank(owner);
        token.transfer(user1, transferAmount);
        assertEq(token.balanceOf(user1), transferAmount);

        // Transfer from user1 to ecosystem address (tax applies)
        uint256 initialTotalSupply = token.totalSupply();
        vm.prank(user1);
        token.transfer(ecosystemAddr, transferAmount);

        assertEq(token.balanceOf(ecosystemAddr), expectedTransfer);
        assertEq(token.totalSupply(), initialTotalSupply - expectedBurn);
    }

    function testOnlyOwnerCanSetEcosystem() public {
        vm.prank(user1);
        vm.expectRevert();
        token.setEcosystemAddress(ecosystemAddr, true);
    }
}
