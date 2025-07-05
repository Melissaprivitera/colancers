'use client';

import { useState } from 'react';
import { useAccount } from 'wagmi';
import { Skill, FlareCredential } from '@/types';

interface SkillVerificationProps {
  skills: Skill[];
  onSkillVerified?: (skill: Skill, credential: FlareCredential) => void;
}

export function SkillVerification({ skills, onSkillVerified }: SkillVerificationProps) {
  const { address } = useAccount();
  const [isVerifying, setIsVerifying] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<string>('');

  const handleVerifySkill = async (skillId: string) => {
    if (!address) return;
    
    setIsVerifying(true);
    try {
      // TODO: Implement Flare FDC verification
      // This would typically involve:
      // 1. Connecting to Flare FDC
      // 2. Querying for credentials
      // 3. Verifying credentials on-chain
      // 4. Updating skill verification status
      
      const skill = skills.find(s => s.id === skillId);
      if (!skill) return;
      
      const mockCredential: FlareCredential = {
        id: `cred-${skillId}`,
        type: 'skill-verification',
        issuer: 'flare-fdc',
        subject: address,
        issuedAt: new Date(),
        data: {
          skill: skill.name,
          level: skill.level,
          verified: true
        },
        proof: 'mock-flare-proof'
      };
      
      const updatedSkill: Skill = {
        ...skill,
        verified: true,
        verificationSource: 'flare-fdc'
      };
      
      onSkillVerified?.(updatedSkill, mockCredential);
    } catch (error) {
      console.error('Error verifying skill:', error);
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="card">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-8 h-8 bg-rose/20 rounded-full flex items-center justify-center">
          <span className="text-lg">⭐</span>
        </div>
        <h3 className="text-xl font-bold text-violet">Skill Verification</h3>
      </div>
      
      <div className="space-y-4">
        <p className="text-violet/70">
          Verify your skills through Flare's Flare Data Connector (FDC) for on-chain credential verification.
        </p>
        
        {skills.length === 0 ? (
          <div className="text-center py-8 text-violet/50">
            <p>No skills added yet</p>
            <p className="text-sm">Add skills to your profile to verify them</p>
          </div>
        ) : (
          <div className="space-y-3">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
              >
                <div>
                  <h4 className="font-medium text-violet">{skill.name}</h4>
                  <p className="text-sm text-violet/70 capitalize">{skill.level}</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  {skill.verified ? (
                    <span className="text-green-600 text-sm">✅ Verified</span>
                  ) : (
                    <button
                      onClick={() => handleVerifySkill(skill.id)}
                      disabled={isVerifying}
                      className="btn-secondary text-sm px-3 py-1"
                    >
                      {isVerifying && selectedSkill === skill.id ? 'Verifying...' : 'Verify'}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="text-xs text-violet/50">
          <p>• On-chain credential verification</p>
          <p>• Cross-referencing with multiple sources</p>
          <p>• Tamper-proof skill validation</p>
        </div>
      </div>
    </div>
  );
} 