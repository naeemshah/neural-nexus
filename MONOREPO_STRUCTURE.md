# Neural Nexus Monorepo Structure

## Overview
This monorepo uses NX for managing multiple applications and libraries in a single repository. The structure is designed for scalability and code sharing.

## Directory Structure

```
neural-nexus/
├── apps/                    # Applications
│   ├── website/            # Main website (React + Vite)
│   └── launchpad/          # Token launchpad application
├── packages/               # Shared libraries
│   └── ui/                 # UI component library
├── crypto/                 # Smart contracts & blockchain
│   ├── contracts/          # Solidity contracts
│   ├── test/               # Contract tests
│   ├── scripts/            # Deployment scripts
│   └── hardhat.config.js   # Hardhat configuration
└── libs/                   # (Reserved for future libraries)
```

## Applications

### `apps/website`
- **Purpose**: Main Neural Nexus website
- **Tech Stack**: React 19, TypeScript, Vite, Tailwind CSS v4
- **Port**: 3000
- **Build**: `npm run build:website`
- **Serve**: `npm run serve:website`

### `apps/launchpad`
- **Purpose**: Token launchpad interface
- **Tech Stack**: React 19, TypeScript, Vite, Tailwind CSS v4
- **Port**: 3001
- **Build**: `npm run build:launchpad`
- **Serve**: `npm run serve:launchpad`

## Shared Libraries

### `packages/ui`
- **Purpose**: Reusable UI components
- **Tech Stack**: React 19, TypeScript
- **Usage**: Import components via `@neural-nexus/ui`
- **Build**: `npm run build:ui`

## Smart Contracts

### `crypto/`
- **Purpose**: Blockchain development and deployment
- **Tech Stack**: Solidity 0.8.20, Hardhat, Foundry
- **Networks**: Base Mainnet, Base Sepolia
- **Contracts**: NAE_Token.sol (25% burn tax with owner exemption)
- **Tests**: `npm run test:crypto`
- **Compile**: `npm run compile:crypto`

## Development Workflow

### Adding a New Application
1. Generate app: `npx nx generate @nx/react:app app-name`
2. Configure in `apps/app-name/project.json`
3. Update `package.json` scripts if needed

### Adding a New Library
1. Generate lib: `npx nx generate @nx/react:lib lib-name`
2. Configure in `packages/lib-name/project.json`
3. Export public API in `packages/lib-name/src/index.ts`

### Building Projects
- Build all: `npm run build`
- Build specific: `nx build <project-name>`

### Running Tests
- Test all: `npm run test`
- Test specific: `nx test <project-name>`

## NX Configuration
- **Workspace Layout**: Apps in `apps/`, libs in `packages/`
- **Build System**: Vite for applications and libraries
- **Task Runner**: NX with caching for fast rebuilds

## Deployment

### Frontend Applications
- Built outputs in `dist/apps/<app-name>/`
- Can be deployed to Vercel, Netlify, or static hosting

### Smart Contracts
- Deployment scripts in `crypto/scripts/`
- Base network configuration in `crypto/hardhat.config.js`
- Requires `.env` with `PRIVATE_KEY` and `BASESCAN_API_KEY`

## Code Sharing
- UI components: Import from `@neural-nexus/ui`
- Type definitions: Shared via TypeScript path aliases
- Utility functions: Can be added to shared libraries

## Best Practices
1. Keep applications focused and single-purpose
2. Share code via libraries, not copy-paste
3. Use TypeScript for type safety
4. Write tests for critical functionality
5. Document public APIs in libraries
6. Follow semantic versioning for libraries