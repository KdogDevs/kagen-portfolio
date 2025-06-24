// src/components/icons/tech/ReactIcon.tsx
import { FC } from 'react';

export const ReactIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="2.2"/>
    <path d="M12 17.5c2.76 0 5-1.12 5-2.5s-2.24-2.5-5-2.5-5 1.12-5 2.5 2.24 2.5 5 2.5zm0-11c2.76 0 5 1.12 5 2.5S14.76 9.5 12 9.5 7 8.38 7 7s2.24-2.5 5-2.5z"/>
    <ellipse cx="12" cy="12" rx="8" ry="3" fill="none" stroke="currentColor" strokeWidth="1"/>
    <ellipse cx="12" cy="12" rx="8" ry="3" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="8" ry="3" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(-60 12 12)"/>
  </svg>
);