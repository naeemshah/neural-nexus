# Neural Nexus Token Deployment

## Jira Ticket: NN-92 - Base Testnet Deployment

### Quick Start
```bash
# 1. Setup environment
cp .env.example .env
# Edit .env with your PRIVATE_KEY and BASESCAN_API_KEY

# 2. Install dependencies (if not already)
npm install

# 3. Test configuration
npx hardhat run scripts/test-deployment.js --network hardhat

# 4. Deploy to Base Sepolia
npm run deploy:sepolia
```

### Deployment Outputs
After successful deployment, you will get:
1. `deployment-info.json` - Complete deployment details
2. Console output with:
   - Contract address
   - Transaction hash
   - BaseScan verification URL
   - Token details (name, symbol, supply, burn rate)

### Files Created
- `scripts/deploy-sepolia.js` - Enhanced deployment script with verification
- `scripts/test-deployment.js` - Configuration test script
- `SECURE_DEPLOYMENT_GUIDE.md` - Security best practices
- `IMPLEMENTATION_PLAN.md` - Detailed deployment plan
- `deployment-info.json` - Generated after deployment

### Network Configuration
- **Testnet**: Base Sepolia (chainId: 84532)
- **RPC URL**: https://sepolia.base.org
- **Explorer**: https://sepolia.basescan.org

### Contract Details
- **Name**: Neural Nexus
- **Symbol**: NAE
- **Initial Supply**: 1,000,000 tokens
- **Burn Rate**: 25% on transfers (owner exempt)
- **Decimals**: 18

### Verification
Contract is automatically verified on BaseScan after deployment. Manual verification:
```bash
npx hardhat verify --network base-sepolia <contract_address> <initial_supply>
```

### Security
- Private keys stored in `.env` file only
- `.env` is gitignored
- Testnet deployment only uses test ETH
- Follow guidelines in `SECURE_DEPLOYMENT_GUIDE.md`

### Post-Deployment Tasks
1. Update Jira ticket NN-92 with:
   - Contract address
   - BaseScan URL
   - Deployment timestamp
2. Commit deployment artifacts to GitHub
3. Test token transfers to verify burn tax functionality
4. Prepare for mainnet deployment (NN-93)