// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Test.sol";
import "../contracts/NAE_Token.sol";

contract NAE_TokenTest is Test {
    NAE_Token public token;
    address public owner = address(1);
    address public user1 = address(2);
    address public user2 = address(3);
    uint256 public initialSupply = 1000000;

    function setUp() public {
        vm.startPrank(owner);
        token = new NAE_Token(initialSupply);
        vm.stopPrank();
    }

    function test_OwnerTransferNoTax() public {
        uint256 amount = 1000 * 10**18;
        vm.prank(owner);
        token.transfer(user1, amount);
        
        // Owner should not be taxed
        assertEq(token.balanceOf(user1), amount);
        assertEq(token.totalSupply(), initialSupply * 10**18);
    }

    function test_UserTransferBurnTax() public {
        uint256 setupAmount = 2000 * 10**18;
        vm.prank(owner);
        token.transfer(user1, setupAmount);

        uint256 transferAmount = 1000 * 10**18;
        uint256 expectedBurn = (transferAmount * 2500) / 10000;
        uint256 expectedSend = transferAmount - expectedBurn;

        vm.prank(user1);
        token.transfer(user2, transferAmount);

        assertEq(token.balanceOf(user2), expectedSend);
        assertEq(token.balanceOf(user1), setupAmount - transferAmount);
        assertEq(token.totalSupply(), (initialSupply * 10**18) - expectedBurn);
    }

    function test_TransferFromBurnTax() public {
        uint256 setupAmount = 2000 * 10**18;
        vm.prank(owner);
        token.transfer(user1, setupAmount);

        uint256 transferAmount = 1000 * 10**18;
        uint256 expectedBurn = (transferAmount * 2500) / 10000;
        uint256 expectedSend = transferAmount - expectedBurn;

        vm.prank(user1);
        token.approve(user2, transferAmount);

        vm.prank(user2);
        token.transferFrom(user1, user2, transferAmount);

        assertEq(token.balanceOf(user2), expectedSend);
        assertEq(token.totalSupply(), (initialSupply * 10**18) - expectedBurn);
    }

    function test_ZeroAmountTransfer() public {
        vm.prank(user1);
        token.transfer(user2, 0);
        assertEq(token.balanceOf(user2), 0);
    }
}
