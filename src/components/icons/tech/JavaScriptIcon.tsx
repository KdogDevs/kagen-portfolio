// src/components/icons/tech/JavaScriptIcon.tsx
import { FC } from 'react';

export const JavaScriptIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor"/>
    <text x="12" y="15" fontSize="12" textAnchor="middle" fill="white" fontWeight="bold">JS</text>
  </svg>
);