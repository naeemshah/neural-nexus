// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title NAE Token (Neural Nexus)
 * @dev Implementation of the Neural Nexus Ecosystem Token with Burn logic.
 * 25% Burn on Transfer is handled via application layer or custom logic if requested.
 * Standard implementation uses OpenZeppelin standards for security.
 */
contract NAE_Token is ERC20, Ownable {
    uint256 public constant BURN_RATE = 2500; // 25.00%
    uint256 public constant DENOMINATOR = 10000;

    constructor(uint256 initialSupply) ERC20("Neural Nexus", "NAE") Ownable(msg.sender) {
        _mint(msg.sender, initialSupply * 10 ** decimals());
    }

    /**
     * @dev Overrides transfer to implement burn tax logic.
     * 25% of the transferred amount is burned, and 75% is sent to the recipient.
     * Tax is not applied to the owner.
     */
    function transfer(address to, uint256 amount) public override returns (bool) {
        if (_msgSender() == owner()) {
            return super.transfer(to, amount);
        }

        uint256 burnAmount = (amount * BURN_RATE) / DENOMINATOR;
        uint256 sendAmount = amount - burnAmount;
        
        if (burnAmount > 0) {
            _burn(_msgSender(), burnAmount);
        }
        
        return super.transfer(to, sendAmount);
    }

    /**
     * @dev Overrides transferFrom to implement burn tax logic.
     * Tax is not applied to the owner.
     */
    function transferFrom(address from, address to, uint256 amount) public override returns (bool) {
        if (from == owner()) {
            return super.transferFrom(from, to, amount);
        }

        uint256 burnAmount = (amount * BURN_RATE) / DENOMINATOR;
        uint256 sendAmount = amount - burnAmount;
        
        if (burnAmount > 0) {
            _burn(from, burnAmount);
        }
        
        return super.transferFrom(from, to, sendAmount);
    }
}
