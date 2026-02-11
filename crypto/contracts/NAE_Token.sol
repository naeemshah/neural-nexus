// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NAE_Token is ERC20, Ownable {
    uint256 public constant BURN_TAX_PERCENT = 25; // 0.25% (25/10000)
    uint256 public constant TAX_DIVISOR = 10000;

    constructor(uint256 initialSupply) ERC20("Neural Nexus", "NAE") Ownable(msg.sender) {
        _mint(msg.sender, initialSupply * 10**decimals());
    }

    function _update(address from, address to, uint256 value) internal virtual override {
        // Apply burn tax on transfers (except minting/burning and owner transactions)
        if (from != address(0) && to != address(0) && from != owner() && to != owner()) {
            uint256 burnAmount = (value * BURN_TAX_PERCENT) / TAX_DIVISOR;
            if (burnAmount > 0) {
                super._update(from, address(0), burnAmount);
                value -= burnAmount;
            }
        }
        super._update(from, to, value);
    }
}
