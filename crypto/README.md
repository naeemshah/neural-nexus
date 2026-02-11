# Neural Nexus Crypto Module

## Overview
This module contains the smart contracts and tooling for the Neural Nexus ecosystem token (NAE Token).

## Smart Contracts

### NAE_Token.sol
- **Purpose**: Neural Nexus Ecosystem Token with 25% burn tax on transfers
- **Standards**: ERC20 with OpenZeppelin implementations
- **Key Features**:
  - 25% burn tax on all transfers (except owner transfers)
  - Owner exemption to prevent tax on initial distribution
  - OpenZeppelin Ownable for access control
  - Compliant with ERC20 standard

## Technical Decisions

### 1. Burn Tax Implementation
- **Rate**: 25% (2500 basis points)
- **Denominator**: 10000 for precise percentage calculations
- **Owner Exemption**: Critical fix applied - owner transfers are tax-free
- **Implementation**: Overrides `transfer()` and `transferFrom()` methods

### 2. Security Considerations
- Uses OpenZeppelin contracts for battle-tested implementations
- Owner exemption prevents accidental token loss during distribution
- Proper access control via Ownable pattern
- Comprehensive unit tests covering edge cases

### 3. Development Toolchain
- **Hardhat**: Primary development framework
- **Foundry**: Alternative testing framework (optional)
- **OpenZeppelin**: Security-first contract libraries
- **Base Network**: Primary deployment target (Base Sepolia for testing)

### 4. Testing Strategy
- **Hardhat Tests**: JavaScript-based tests for integration
- **Foundry Tests**: Solidity-based tests for gas optimization
- **Coverage**: Tests cover:
  - Owner exemption functionality
  - Burn tax calculation accuracy
  - Edge cases (zero transfers, insufficient balance)
  - TransferFrom with approval flows

## Deployment

### Networks
- **Base Sepolia**: Testnet deployment
- **Base Mainnet**: Production deployment

### Environment Variables
Required for deployment:
```bash
PRIVATE_KEY=your_private_key
BASESCAN_API_KEY=your_basescan_api_key
```

### Commands
```bash
# Compile contracts
npm run compile

# Run tests
npm run test

# Deploy to Base Sepolia
npm run deploy:sepolia

# Deploy to Base Mainnet  
npm run deploy:mainnet
```

## Architecture

```
crypto/
├── contracts/
│   └── NAE_Token.sol      # Main token contract
├── scripts/
│   └── deploy.js          # Deployment script
├── test/
│   ├── NAE_Token.js       # Hardhat tests
│   ├── NAE_Token.t.sol    # Foundry tests
│   └── NAE_Token.test.js  # Additional test coverage
├── hardhat.config.js      # Hardhat configuration
├── foundry.toml          # Foundry configuration
└── package.json          # Dependencies and scripts
```

## Gas Optimization
- Minimal storage operations
- Efficient burn calculation using fixed-point arithmetic
- Reuses OpenZeppelin optimized implementations

## Audit Status
- ✅ Unit tests passing
- ✅ Owner exemption implemented (critical fix)
- ✅ OpenZeppelin compliance verified
- ⏳ External audit pending before mainnet deployment

## Next Steps
1. Complete external security audit
2. Deploy to Base Sepolia for final testing
3. Implement multi-sig for owner control
4. Add upgradeability proxy pattern if needed