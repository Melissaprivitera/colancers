import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, sepolia, polygon, optimism, arbitrum, base } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Colancers',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'YOUR_PROJECT_ID',
  chains: [mainnet, sepolia, polygon, optimism, arbitrum, base],
  ssr: true,
});

// ENS Configuration
export const ensConfig = {
  // Add ENS-specific configuration here
  ensAddress: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e', // Mainnet ENS
};

// World ID Configuration
export const worldIdConfig = {
  appId: process.env.NEXT_PUBLIC_WORLD_ID_APP_ID || 'YOUR_WORLD_ID_APP_ID',
  action: 'colancers-verification',
  signal: 'user-verification',
};

// Flare FDC Configuration
export const flareConfig = {
  // Add Flare FDC configuration here
  // Note: Flare SDK integration will be added separately
  network: 'flare',
  rpcUrl: process.env.NEXT_PUBLIC_FLARE_RPC_URL || 'https://flare-api.flare.network/ext/C/rpc',
}; 