// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title NAE Token (Nexus AI Engine)
 * @dev Implementation of the NAE Token for the Nexus AI Engine ecosystem.
 * Features:
 * - Fixed Total Supply: 1,000,000,000 NAE
 * - Built-in Burn mechanism (ERC20Burnable)
 * - Ecosystem Fee-Burn Mechanism: 25% tax on ecosystem-triggered transfers.
 * - Network: Base (Standard ERC20 compatible)
 */
contract NAEToken is ERC20, ERC20Burnable, Ownable {
    
    // The fixed total supply: 1 Billion tokens
    uint256 private constant TOTAL_SUPPLY = 1_000_000_000 * 10**18;
    
    // Ecosystem fee percentage (25% = 2500 basis points)
    uint256 public constant ECOSYSTEM_FEE = 2500;
    uint256 public constant FEE_DENOMINATOR = 10000;

    // Mapping to track addresses that are part of the ecosystem usage (triggering the 25% burn)
    mapping(address => bool) public isEcosystemAddress;

    event EcosystemFeeApplied(address indexed from, address indexed to, uint256 amountBurned);
    event EcosystemAddressUpdated(address indexed account, bool isEcosystem);

    /**
     * @dev Constructor that mints the total supply to the deployer.
     */
    constructor() ERC20("Nexus AI Engine", "NAE") Ownable(msg.sender) {
        _mint(msg.sender, TOTAL_SUPPLY);
    }

    /**
     * @dev Sets an address as an ecosystem address. 
     * Transfers to/from these addresses will trigger the 25% burn.
     * @param account The address to update.
     * @param status The ecosystem status.
     */
    function setEcosystemAddress(address account, bool status) external onlyOwner {
        isEcosystemAddress[account] = status;
        emit EcosystemAddressUpdated(account, status);
    }

    /**
     * @dev Overrides the transfer and transferFrom logic to implement the ecosystem tax.
     * If either the sender or receiver is an ecosystem address, 25% of the transfer is burned.
     */
    function _update(address from, address to, uint256 value) internal virtual override {
        // Optimized path for non-ecosystem transactions and mint/burn
        if (from == address(0) || to == address(0) || (!isEcosystemAddress[from] && !isEcosystemAddress[to])) {
            super._update(from, to, value);
            return;
        }

        // Ecosystem fee path (25% burn)
        uint256 amountToBurn;
        unchecked {
            // value * 2500 / 10000 = value / 4
            // Using bitwise shift for division if possible, but 25% is exactly value >> 2
            amountToBurn = value >> 2; 
        }

        if (amountToBurn > 0) {
            uint256 remainingValue;
            unchecked {
                remainingValue = value - amountToBurn;
            }
            // Execute burn first to maintain balance consistency
            super._update(from, address(0), amountToBurn);
            super._update(from, to, remainingValue);
            emit EcosystemFeeApplied(from, to, amountToBurn);
        } else {
            super._update(from, to, value);
        }
    }

    /**
     * @dev Explicit burn function (already included via ERC20Burnable, but kept for clarity).
     * @param amount The amount of tokens to burn.
     */
    function burn(uint256 amount) public virtual override {
        super.burn(amount);
    }
}
