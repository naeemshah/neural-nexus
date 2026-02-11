// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title NAE_Token
 * @dev ERC20 token for Neural Nexus with a 25% burn tax on transfers.
 */
contract NAE_Token is ERC20, Ownable {
    uint256 public constant BURN_RATE = 2500; // 25.00%
    uint256 public constant DENOMINATOR = 10000;

    constructor(uint256 initialSupply) ERC20("Neural Nexus", "NAE") Ownable(msg.sender) {
        _mint(msg.sender, initialSupply * 10 ** decimals());
    }

    /**
     * @dev Overrides the transfer function to implement a burn tax.
     * 25% of the transferred amount is burned, and 75% is sent to the recipient.
     * Tax is not applied to the owner.
     */
    function transfer(address to, uint256 amount) public virtual override returns (bool) {
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
     * @dev Overrides the transferFrom function to implement a burn tax.
     * Tax is not applied to the owner.
     */
    function transferFrom(address from, address to, uint256 amount) public virtual override returns (bool) {
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
