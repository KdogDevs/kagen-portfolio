// src/components/icons/skills/SystemArchitecture.tsx
import { FC } from 'react';

export const SystemArchitectureIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="7" height="9" rx="1"/>
    <rect x="14" y="3" width="7" height="5" rx="1"/>
    <rect x="14" y="12" width="7" height="9" rx="1"/>
    <path d="m5 21 5-5 5 5"/>
    <path d="m12 12 5-5"/>
  </svg>
);