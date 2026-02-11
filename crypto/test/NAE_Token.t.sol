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
        vm.prank(owner);
        token = new NAE_Token(initialSupply);
    }

    function testTransferBurnTax() public {
        uint256 transferAmount = 1000 * 10**18;
        uint256 expectedBurn = (transferAmount * 2500) / 10000;
        uint256 expectedSend = transferAmount - expectedBurn;

        vm.prank(owner);
        token.transfer(user1, transferAmount);

        assertEq(token.balanceOf(user1), expectedSend);
        assertEq(token.totalSupply(), (initialSupply * 10**18) - expectedBurn);
    }

    function testTransferFromBurnTax() public {
        uint256 transferAmount = 1000 * 10**18;
        uint256 expectedBurn = (transferAmount * 2500) / 10000;
        uint256 expectedSend = transferAmount - expectedBurn;

        vm.prank(owner);
        token.approve(user1, transferAmount);

        vm.prank(user1);
        token.transferFrom(owner, user2, transferAmount);

        assertEq(token.balanceOf(user2), expectedSend);
    }
}
