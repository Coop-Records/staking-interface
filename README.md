# Coop Staking Interface

A modern, user-friendly interface for staking Coop tokens and earning COOP rewards.

## Key Features

- 🔒 Secure token staking with Privy authentication
- 💰 Real-time balance display
- ⏱️ Dynamic lock duration tracking
- 🎨 Clean, modern UI with blur effects
- 🔄 Automatic approval and deposit flow
- 📱 Responsive design for all devices

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- A modern web browser
- MetaMask or any Web3 wallet

### Environment Variables

Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_PRIVY_APP_ID=your-privy-app-id
NEXT_PUBLIC_IJN_TOKEN_ADDRESS=your-token-address
NEXT_PUBLIC_STAKING_CONTRACT_ADDRESS=your-staking-contract-address
```

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/staking-interface.git
cd staking-interface
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. Connect your wallet using Privy authentication
2. Enter the amount of IJN tokens you want to stake
3. Approve the token spending (first-time only)
4. Confirm the staking transaction
5. Track your staked balance and unlock time

## Tech Stack

- Next.js 14 with App Router
- TypeScript
- TailwindCSS
- Privy for Web3 Authentication
- Viem for Ethereum interactions
- TanStack Query for state management
- Shadcn/ui for UI components
