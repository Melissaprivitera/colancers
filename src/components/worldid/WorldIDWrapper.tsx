'use client';

import { IDKitWidget } from '@worldcoin/idkit';
import { ReactNode } from 'react';

interface WorldIDWrapperProps {
  app_id: string;
  action: string;
  signal: string;
  onSuccess: (proof: any) => void;
  children: ({ open }: { open: () => void }) => ReactNode;
}

export function WorldIDWrapper({ app_id, action, signal, onSuccess, children }: WorldIDWrapperProps) {
  return (
    <IDKitWidget
      app_id={app_id}
      action={action}
      signal={signal}
      onSuccess={onSuccess}
    >
      {children}
    </IDKitWidget>
  );
} 