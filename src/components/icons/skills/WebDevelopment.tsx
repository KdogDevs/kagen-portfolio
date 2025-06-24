// src/components/icons/skills/WebDevelopment.tsx
import { FC } from 'react';

export const WebDevelopmentIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="16,18 22,12 16,6"/>
    <polyline points="8,6 2,12 8,18"/>
    <line x1="12" y1="2" x2="12" y2="22"/>
  </svg>
);