# Secure Deployment Guide for Neural Nexus (Jira NN-92)

## Prerequisites

### 1. Environment Variables Setup
Create a `.env` file in the `/crypto` directory with:

```bash
PRIVATE_KEY=your_private_key_without_0x_prefix
BASESCAN_API_KEY=your_basescan_api_key
```

**Security Notes:**
- Never commit `.env` to version control
- Use a testnet wallet with minimal funds
- Consider using a hardware wallet for mainnet

### 2. Testnet ETH Requirements
You need Base Sepolia ETH for deployment:
- Estimated gas: 0.001-0.005 ETH
- Get testnet ETH from: https://sepoliafaucet.com/

### 3. BaseScan API Key
1. Go to https://basescan.org/
2. Create an account
3. Go to "API-KEYs" section
4. Create new API key
5. Copy to `.env` file

## Deployment Steps

### Step 1: Environment Setup
```bash
cd /data/.openclaw/workspace/neural-nexus/crypto
cp .env.example .env
# Edit .env with your credentials
```

### Step 2: Verify Setup
```bash
npm run compile
```

### Step 3: Deploy to Base Sepolia
```bash
npm run deploy:sepolia
```

### Step 4: Verify Deployment
1. Check deployment-info.json for contract address
2. Visit BaseScan URL provided in output
3. Verify contract is verified and functional

## Security Best Practices

### ✅ DO:
- Use environment variables for secrets
- Test on testnet before mainnet
- Keep private keys secure
- Use hardware wallets for production
- Monitor gas prices before deployment

### ❌ DON'T:
- Hardcode private keys in scripts
- Commit `.env` files to Git
- Use mainnet keys on testnet
- Share private keys or API keys

## Troubleshooting

### Insufficient Balance
Error: "Insufficient balance for deployment"
Solution: Get testnet ETH from faucet

### Verification Failed
Error: "Contract verification failed"
Solution: 
1. Check BASESCAN_API_KEY is correct
2. Wait for more block confirmations
3. Run verification manually: `npm run verify --address <contract> --constructor-args <args>`

### Network Issues
Error: "Network connection failed"
Solution:
1. Check RPC URL in hardhat.config.js
2. Try alternative RPC: https://sepolia.base.org
3. Check internet connection

## Post-Deployment Checklist

- [ ] Contract deployed successfully
- [ ] Contract verified on BaseScan
- [ ] Token metadata correct (name, symbol, supply)
- [ ] Deployment info saved to deployment-info.json
- [ ] Jira ticket NN-92 updated
- [ ] GitHub commit created with deployment artifacts