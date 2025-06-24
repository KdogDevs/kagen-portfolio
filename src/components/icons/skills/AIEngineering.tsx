// src/components/icons/skills/AIEngineering.tsx
import { FC } from 'react';

export const AIEngineeringIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 1v6m0 14v-6"/>
    <path d="m9 9-3-3 1.5-1.5M9 15l-3 3-1.5-1.5M15 9l3-3-1.5-1.5M15 15l3 3 1.5 1.5"/>
    <path d="M12 12L9 9m6 6L12 12m0 0l3-3m-6 6l3-3"/>
  </svg>
);