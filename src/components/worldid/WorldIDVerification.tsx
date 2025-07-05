'use client';

import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { IDKitWidget } from '@worldcoin/idkit';
import type { WorldIDVerification } from '@/types';

interface WorldIDVerificationProps {
  verification?: WorldIDVerification;
  onVerificationComplete?: (verification: WorldIDVerification) => void;
}

export function WorldIDVerification({ verification, onVerificationComplete }: WorldIDVerificationProps) {
  const { address } = useAccount();
  const [isVerifying, setIsVerifying] = useState(false);
  const [storedVerification, setStoredVerification] = useState<WorldIDVerification | null>(null);

  useEffect(() => {
    // Check for stored verification on component mount
    const stored = localStorage.getItem('worldIdVerification');
    if (stored) {
      const verification = JSON.parse(stored);
      setStoredVerification({
        ...verification,
        verifiedAt: new Date(verification.verifiedAt)
      });
    }
  }, []);

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
      setStoredVerification(verification);
      
      onVerificationComplete?.(verification);
    } catch (error) {
      console.error('Error during World ID verification:', error);
    } finally {
      setIsVerifying(false);
    }
  };

  const currentVerification = verification || storedVerification;

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
        
        {currentVerification?.verified ? (
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-green-600">
              <span className="text-lg">✅</span>
              <span>Verified on {currentVerification.verifiedAt.toLocaleDateString()}</span>
            </div>
            <div className="text-xs text-plum/50">
              <p>• Proof: {currentVerification.proof.substring(0, 20)}...</p>
              <p>• User ID: {currentVerification.userId}</p>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-soft-yellow">
              <span className="text-lg">⚠️</span>
              <span>Verification required to access full features</span>
            </div>
            
            {address ? (
              <IDKitWidget
                app_id="app_staging_1234567890abcdef"
                action="colancers-verification"
                signal={address}
                onSuccess={handleVerify}
              >
                {({ open }) => (
                  <button
                    onClick={open}
                    disabled={isVerifying}
                    className="btn-primary w-full"
                  >
                    {isVerifying ? 'Verifying...' : 'Verify with World ID'}
                  </button>
                )}
              </IDKitWidget>
            ) : (
              <button
                disabled
                className="btn-primary w-full opacity-50 cursor-not-allowed"
              >
                Connect Wallet to Verify
              </button>
            )}
          </div>
        )}
        
        <div className="text-xs text-plum/50">
          <p>• One person, one account policy</p>
          <p>• Privacy-preserving verification</p>
          <p>• No personal data collected</p>
          <p>• Uses World ID Orb for highest security</p>
        </div>
      </div>
    </div>
  );
} 