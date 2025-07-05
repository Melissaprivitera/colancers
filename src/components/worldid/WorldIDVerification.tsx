'use client';

import { useState } from 'react';
import { useAccount } from 'wagmi';
import type { WorldIDVerification } from '@/types';

interface WorldIDVerificationProps {
  verification?: WorldIDVerification;
  onVerificationComplete?: (verification: WorldIDVerification) => void;
}

export function WorldIDVerification({ verification, onVerificationComplete }: WorldIDVerificationProps) {
  const { address } = useAccount();
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = async () => {
    if (!address) return;
    
    setIsVerifying(true);
    try {
      // TODO: Implement World ID verification
      // This would typically involve:
      // 1. Opening the World ID widget
      // 2. User completing the verification
      // 3. Receiving the proof
      // 4. Verifying the proof on-chain
      
      const mockVerification: WorldIDVerification = {
        userId: address,
        verified: true,
        proof: 'mock-proof-hash',
        verifiedAt: new Date()
      };
      
      onVerificationComplete?.(mockVerification);
    } catch (error) {
      console.error('Error during World ID verification:', error);
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="card">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-8 h-8 bg-soft-yellow/20 rounded-full flex items-center justify-center">
          <span className="text-lg">🌍</span>
        </div>
        <h3 className="text-xl font-bold text-plum">World ID Verification</h3>
      </div>
      
      <div className="space-y-4">
        <p className="text-plum/70">
          Verify that you are a unique human to prevent duplicate registrations and ensure fair participation.
        </p>
        
        {verification?.verified ? (
          <div className="flex items-center space-x-2 text-green-600">
            <span className="text-lg">✅</span>
            <span>Verified on {verification.verifiedAt.toLocaleDateString()}</span>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-soft-yellow">
              <span className="text-lg">⚠️</span>
              <span>Verification required to access full features</span>
            </div>
            
            <button
              onClick={handleVerify}
              disabled={isVerifying || !address}
              className="btn-primary w-full"
            >
              {isVerifying ? 'Verifying...' : 'Verify with World ID'}
            </button>
          </div>
        )}
        
        <div className="text-xs text-plum/50">
          <p>• One person, one account policy</p>
          <p>• Privacy-preserving verification</p>
          <p>• No personal data collected</p>
        </div>
      </div>
    </div>
  );
} 