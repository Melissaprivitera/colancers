# 🚀 Colancers - Collaborative Freelancer Teams

A decentralized application that allows freelancers to join collaborative service teams, get paid fairly, and build verified reputation using ENS names, World ID verification, and Flare's FDC for skill verification.

## ✨ Features

### 🆔 ENS Identity Management
- Use a primary ENS name for the company
- Set up secondary names with avatars (optional)
- All skills, projects, and reputation tied to ENS domains
- Decentralized identity verification

### 🌍 World ID Integration
- Unique human verification to prevent duplicate registrations
- One person, one account policy
- Privacy-preserving identity verification

### ⭐ Skill Verification with Flare FDC
- Verify skills through Flare's Flare Data Connector (FDC)
- On-chain credential verification
- Cross-referencing with multiple data sources

### 💰 Fair Payment System
- Smart contract-based payment distribution
- Transparent compensation based on contribution
- Automated payment processing

### 📊 Reputation System
- Verifiable reputation through client reviews
- Skill endorsements and certifications
- On-chain reputation tracking

### 👥 Collaborative Teams
- Join and manage team projects
- Track team performance and contributions
- Collaborative skill development

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Web3**: Wagmi, Viem
- **Wallet Connection**: RainbowKit
- **Identity**: ENS, World ID
- **Verification**: Flare FDC
- **Package Manager**: pnpm

## 🎨 Brand Identity

- **Brand name**: `colancers`
- **Primary Color**: `#fd5d5b` (Coral)
- **Background**: `#fff3ed` (Soft Cream)
- **Text**: `#5d383e` (Plum)
- **Fonts**: Pacifico (Logo), Arimo (UI)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm
- MetaMask or other Web3 wallet
- ENS name (optional but recommended)
- World ID app (for production)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd colancers
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your configuration:
   ```env
   NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_walletconnect_project_id
   NEXT_PUBLIC_WORLD_ID_APP_ID=your_world_id_app_id
   NEXT_PUBLIC_FLARE_RPC_URL=https://flare-api.flare.network/ext/C/rpc
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
colancers/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # Global styles with brand colors
│   │   ├── layout.tsx          # Root layout with Web3 providers
│   │   └── page.tsx            # Landing page
│   ├── components/             # React components
│   │   ├── providers/          # Web3 providers
│   │   ├── ens/               # ENS-related components
│   │   ├── worldid/           # World ID components
│   │   ├── flare/             # Flare FDC components
│   │   ├── payments/          # Payment components
│   │   ├── reputation/        # Reputation components
│   │   ├── teams/             # Team management components
│   │   └── ConnectWallet.tsx  # Wallet connection component
│   ├── lib/                   # Utility libraries
│   │   └── web3.ts            # Web3 configuration
│   ├── hooks/                 # Custom React hooks
│   ├── types/                 # TypeScript type definitions
│   └── utils/                 # Utility functions
├── contracts/                 # Smart contracts
│   ├── payments/              # Payment contracts
│   ├── reputation/            # Reputation contracts
│   └── teams/                 # Team management contracts
├── public/                    # Static assets
│   └── images/                # Images and logos
└── scripts/                   # Deployment and utility scripts
```

## 🔧 Configuration

### Web3 Setup

The app uses the following Web3 technologies:

- **Wagmi**: React hooks for Ethereum
- **Viem**: TypeScript interface for Ethereum
- **RainbowKit**: Wallet connection UI
- **ENS**: Ethereum Name Service integration
- **World ID**: Human verification
- **Flare FDC**: Skill verification

### Smart Contracts

The project includes smart contracts for:

- **PaymentContract**: Fair payment distribution
- **ReputationContract**: On-chain reputation tracking
- **TeamContract**: Team management and collaboration

## 🎨 Brand Guidelines

### Colors
- **Cream**: `#fff3ed` - Main background
- **Coral**: `#fd5d5b` - Primary accent, logo
- **Plum**: `#5d383e` - Body text, soft contrast
- **Rose**: `#ff9593` - Button hover, secondary
- **Soft Yellow**: `#ffd447` - Call to action, alerts

### Typography
- **Logo**: Pacifico (Google Fonts)
- **UI Text**: Arimo 400/700 (Google Fonts)
- **Captions**: Arimo 300/400 (Google Fonts)

### Components
- **Primary Buttons**: Coral background, white text, 12px border radius
- **Secondary Buttons**: Coral border, transparent background
- **Cards**: White background, soft shadow, 16px border radius

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [ENS](https://ens.domains/) for decentralized naming
- [World ID](https://worldcoin.org/world-id) for human verification
- [Flare Network](https://flare.network/) for FDC integration
- [RainbowKit](https://www.rainbowkit.com/) for wallet connection
- [Wagmi](https://wagmi.sh/) for Ethereum hooks

## 📞 Support

For support, email support@colancers.com or join our Discord community.

---

Built with ❤️ for the future of collaborative freelancing
