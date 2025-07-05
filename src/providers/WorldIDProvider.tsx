'use client';

import { IDKitWidget } from '@worldcoin/idkit';
import { useAccount } from 'wagmi';
import { useState } from 'react';
import type { WorldIDVerification } from '@/types';

interface WorldIDProviderProps {
  children: React.ReactNode;
  onVerificationComplete?: (verification: WorldIDVerification) => void;
}

export function WorldIDProvider({ children, onVerificationComplete }: WorldIDProviderProps) {
  const { address } = useAccount();
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = async (proof: any) => {
    if (!address) return;
    
    setIsVerifying(true);
    try {
      // In a real implementation, you would:
      // 1. Send the proof to your backend
      // 2. Verify the proof on-chain
      // 3. Store the verification result
      
      const verification: WorldIDVerification = {
        userId: address,
        verified: true,
        proof: proof.proof,
        verifiedAt: new Date()
      };
      
      // Store verification in localStorage for demo purposes
      localStorage.setItem('worldIdVerification', JSON.stringify(verification));
      
      onVerificationComplete?.(verification);
    } catch (error) {
      console.error('Error during World ID verification:', error);
    } finally {
      setIsVerifying(false);
    }
  };

  const getVerificationStatus = (): WorldIDVerification | null => {
    const stored = localStorage.getItem('worldIdVerification');
    if (stored) {
      const verification = JSON.parse(stored);
      return {
        ...verification,
        verifiedAt: new Date(verification.verifiedAt)
      };
    }
    return null;
  };

  return (
    <IDKitWidget
      app_id="app_staging_1234567890abcdef" // Replace with your actual app ID
      action="colancers-verification"
      signal={address}
      onSuccess={handleVerify}
      walletConnectProjectId="your-walletconnect-project-id" // Replace with your project ID
      worldcoinVerificationLevel="orb"
    >
      {({ open }) => (
        <div>
          {children}
          {/* You can expose the open function through context if needed */}
        </div>
      )}
    </IDKitWidget>
  );
}

// Hook to get verification status
export function useWorldIDVerification() {
  const getVerificationStatus = (): WorldIDVerification | null => {
    if (typeof window === 'undefined') return null;
    
    const stored = localStorage.getItem('worldIdVerification');
    if (stored) {
      const verification = JSON.parse(stored);
      return {
        ...verification,
        verifiedAt: new Date(verification.verifiedAt)
      };
    }
    return null;
  };

  return { getVerificationStatus };
} 