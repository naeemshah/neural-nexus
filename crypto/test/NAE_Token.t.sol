// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Test.sol";
import "../contracts/NAE_Token.sol";

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

    function testEcosystemBurnOnTransferTo() public {
        uint256 transferAmount = 1000 * 10**18;
        uint256 expectedBurn = (transferAmount * 2500) / 10000;
        uint256 expectedTransfer = transferAmount - expectedBurn;

        vm.prank(owner);
        token.setEcosystemAddress(ecosystemAddr, true);

        vm.prank(owner);
        token.transfer(user1, transferAmount);

        uint256 initialTotalSupply = token.totalSupply();
        vm.prank(user1);
        token.transfer(ecosystemAddr, transferAmount);

        assertEq(token.balanceOf(ecosystemAddr), expectedTransfer);
        assertEq(token.totalSupply(), initialTotalSupply - expectedBurn);
    }

    function testEcosystemBurnOnTransferFrom() public {
        uint256 transferAmount = 1000 * 10**18;
        
        vm.prank(owner);
        token.setEcosystemAddress(ecosystemAddr, true);
        
        // Give ecosystem address some tokens from owner (owner is NOT ecosystem addr, but ecosystemAddr IS)
        // Transfer TO ecosystem address triggers burn
        uint256 ownerInitialBalance = token.balanceOf(owner);
        vm.prank(owner);
        token.transfer(ecosystemAddr, transferAmount);
        
        uint256 expectedBurn1 = (transferAmount * 2500) / 10000;
        uint256 expectedTransfer1 = transferAmount - expectedBurn1;
        
        assertEq(token.balanceOf(ecosystemAddr), expectedTransfer1);
        
        uint256 supplyAfterFirstTransfer = token.totalSupply();
        
        // Transfer FROM ecosystem address triggers burn
        vm.prank(ecosystemAddr);
        token.transfer(user1, expectedTransfer1);

        uint256 expectedBurn2 = (expectedTransfer1 * 2500) / 10000;
        assertEq(token.balanceOf(user1), expectedTransfer1 - expectedBurn2);
        assertEq(token.totalSupply(), supplyAfterFirstTransfer - expectedBurn2);
    }

    function testNoBurnOnStandardTransfer() public {
        uint256 transferAmount = 1000 * 10**18;
        vm.prank(owner);
        token.transfer(user1, transferAmount);
        assertEq(token.balanceOf(user1), transferAmount);
    }

    function testOnlyOwnerCanSetEcosystem() public {
        vm.startPrank(user1);
        vm.expectRevert();
        token.setEcosystemAddress(ecosystemAddr, true);
        vm.stopPrank();
    }
}
