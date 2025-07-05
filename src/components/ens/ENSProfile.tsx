'use client';

import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import type { ENSProfile } from '@/types';

interface ENSProfileProps {
  profile?: ENSProfile;
  onProfileUpdate?: (profile: ENSProfile) => void;
}

export function ENSProfile({ profile, onProfileUpdate }: ENSProfileProps) {
  const { address } = useAccount();
  const [ensName, setEnsName] = useState(profile?.name || '');
  const [avatar, setAvatar] = useState(profile?.avatar || '');
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    if (!address) return;
    
    setIsLoading(true);
    try {
      // TODO: Implement ENS name resolution and avatar setting
      const updatedProfile: ENSProfile = {
        name: ensName,
        address: address,
        avatar: avatar,
        records: []
      };
      
      onProfileUpdate?.(updatedProfile);
    } catch (error) {
      console.error('Error updating ENS profile:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="card">
      <h3 className="text-xl font-bold text-violet mb-4">ENS Profile</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-violet mb-2">
            ENS Name
          </label>
          <input
            type="text"
            value={ensName}
            onChange={(e) => setEnsName(e.target.value)}
            placeholder="yourname.eth"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-violet mb-2">
            Avatar URL
          </label>
          <input
            type="url"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            placeholder="https://example.com/avatar.jpg"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent"
          />
        </div>
        
        {avatar && (
          <div className="flex items-center space-x-3">
            <img
              src={avatar}
              alt="Avatar preview"
              className="w-12 h-12 rounded-full"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <span className="text-sm text-violet/70">Avatar preview</span>
          </div>
        )}
        
        <button
          onClick={handleSave}
          disabled={isLoading || !address}
          className="btn-primary w-full"
        >
          {isLoading ? 'Saving...' : 'Save Profile'}
        </button>
      </div>
    </div>
  );
} 