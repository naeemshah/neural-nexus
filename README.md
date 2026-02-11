# Neural Nexus ($NAE) - Next-Generation Crypto Ecosystem

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![NX Monorepo](https://img.shields.io/badge/monorepo-NX-blue)](https://nx.dev)
[![Base Network](https://img.shields.io/badge/network-Base-0052FF)](https://base.org)
[![OpenZeppelin](https://img.shields.io/badge/contracts-OpenZeppelin-4E5EE4)](https://openzeppelin.com)

## 🚀 Overview

Neural Nexus ($NAE) is a next-generation cryptocurrency ecosystem built on Base Network with a unique 25% ecosystem burn mechanism. The project features a modern NX monorepo architecture, automated 24/7 development workflow, and comprehensive project management integration.

## 📁 Project Structure

```
neural-nexus/
├── apps/                    # Frontend applications
│   ├── website/            # Main website (React/Next.js)
│   └── launchpad/          # Token presale dashboard
├── crypto/                 # Smart contracts & toolchain
│   ├── contracts/          # Solidity contracts
│   ├── test/              # Foundry unit tests
│   ├── foundry.toml       # Foundry configuration
│   └── hardhat.config.js  # Hardhat configuration
├── libs/                   # Shared libraries
│   ├── ui/                # Shared UI components
│   ├── contracts/         # Web3 integration utilities
│   └── utils/             # Shared utilities
├── archive/               # Deprecated files
└── [configuration files]
```

## 🎯 Core Features

### Smart Contract (NAE_Token.sol)
- **1 Billion Fixed Supply** - No inflation, deflationary model
- **25% Ecosystem Burn Tax** - Automatic burn on ecosystem transfers
- **OpenZeppelin v5 Standards** - ERC20, Burnable, Ownable
- **Base Network Ready** - Optimized for Base mainnet/testnet

### Development Infrastructure
- **NX Monorepo** - Unified development environment
- **24/7 Automated Workflow** - Specialized agents running via cron jobs
- **Jira & Confluence Integration** - Professional project management
- **Continuous Deployment** - Auto-push to GitHub every 5 minutes

## 🛠️ Quick Start

### Prerequisites
- Node.js 18+ & npm
- Foundry (for contract development)
- Git

### Installation
```bash
# Clone repository
git clone https://github.com/naeemshah/neural-nexus.git
cd neural-nexus

# Install dependencies
npm install

# Install Foundry (if not installed)
curl -L https://foundry.paradigm.xyz | bash
foundryup
```

### Development
```bash
# Start development server
npm run dev

# Run contract tests
cd crypto
forge test

# Build frontend apps
nx build website
nx build launchpad
```

## 🤖 Automated Development System

The project uses specialized AI agents running 24/7 via cron jobs:

| Agent | Interval | Responsibilities |
|-------|----------|------------------|
| **Backend Dev** | 5m | Smart contracts, toolchain, NX setup |
| **Frontend Dev** | 5m | React apps, UI/UX, mobile responsiveness |
| **QA Engineer** | 10m | Contract testing, security audits |
| **Marketing** | 10m | Litepaper, branding, social media |
| **Project Manager** | 5m | Coordination, blocker resolution |
| **Assistant PM** | 5m | Jira/Confluence integration, documentation |

## 📊 Project Management

### Jira Integration
- **Project:** Neural Nexus (NN)
- **URL:** https://naeemshah45-1770775258900.atlassian.net/jira/software/c/projects/NN/boards/2
- **Features:** Task tracking, status updates, team assignments, GitHub integration

### Confluence Documentation
- **Space:** Neural Nexus (NN)
- **URL:** https://naeemshah45-1770775258900.atlassian.net/wiki/spaces/NN
- **Pages:** Project overview, team workflows, technical decisions, resource links

## 🌐 Live Deployment

### Current Tunnel
```
https://chronic-yourself-montreal-blogging.trycloudflare.com/
```

### Accessible Pages
- **Website:** `/` (Main landing page)
- **Launchpad:** `/launchpad/index.html` (Presale dashboard)
- **Litepaper:** `/litepaper.html` (Project documentation)
- **GitHub:** https://github.com/naeemshah/neural-nexus

## 📈 Tokenomics

- **Token:** $NAE (Neural Nexus)
- **Total Supply:** 1,000,000,000 (1 Billion)
- **Network:** Base (Ethereum L2)
- **Burn Mechanism:** 25% tax on ecosystem transfers
- **Standards:** ERC20, OpenZeppelin v5 compliant

## 🚧 Current Status

### Phase 1: Foundation (In Progress)
- ✅ NX monorepo structure initialized
- ✅ Smart contract compliance verified
- ✅ 24/7 automated workflow established
- ✅ Jira/Confluence integration complete
- 🔄 React website rewrite (planning)
- 🔄 Contract unit testing
- 🔄 Base testnet deployment preparation

### Next Milestones
1. Complete React website migration
2. Deploy NAE token to Base Sepolia testnet
3. Launch marketing campaign
4. Community building and engagement

## 👥 Team Structure

- **Backend Development:** Smart contracts, toolchain, deployment
- **Frontend Development:** Website, launchpad, UI/UX
- **Quality Assurance:** Testing, security, compliance
- **Marketing & Content:** Litepaper, branding, community
- **Project Management:** Coordination, planning, execution
- **Infrastructure:** Servers, deployment, monitoring

## 📚 Documentation

- **Technical Documentation:** `/docs/` directory
- **Contract Specifications:** `crypto/contracts/NAE_Token.sol`
- **Development Guides:** Confluence space
- **API References:** To be documented

## 🔗 Links & Resources

- **GitHub Repository:** https://github.com/naeemshah/neural-nexus
- **Jira Project:** https://naeemshah45-1770775258900.atlassian.net/jira/software/c/projects/NN/boards/2
- **Confluence Space:** https://naeemshah45-1770775258900.atlassian.net/wiki/spaces/NN
- **Live Website:** https://chronic-yourself-montreal-blogging.trycloudflare.com/

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

---

**Neural Nexus** - Building the future of decentralized ecosystems on Base Network.