// src/components/icons/skills/NetworkInfrastructure.tsx
import { FC } from 'react';

export const NetworkInfrastructureIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="3" width="6" height="6" rx="1"/>
    <rect x="16" y="3" width="6" height="6" rx="1"/>
    <rect x="9" y="15" width="6" height="6" rx="1"/>
    <path d="m5 9 4 6"/>
    <path d="m19 9-4 6"/>
    <path d="M8 6h8"/>
  </svg>
);