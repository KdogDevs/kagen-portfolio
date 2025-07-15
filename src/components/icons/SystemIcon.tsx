import { FC } from 'react';

interface IconProps {
  className?: string;
}

export const SystemIcon: FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="systemGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    {/* Main server rack */}
    <rect
      x="4"
      y="3"
      width="16"
      height="18"
      rx="2"
      ry="2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Server units */}
    <rect x="6" y="5" width="12" height="3" rx="1" fill="url(#systemGradient)" opacity="0.7" />
    <rect x="6" y="9" width="12" height="3" rx="1" fill="url(#systemGradient)" opacity="0.5" />
    <rect x="6" y="13" width="12" height="3" rx="1" fill="url(#systemGradient)" opacity="0.3" />
    
    {/* Power/status indicators */}
    <circle cx="16" cy="6.5" r="0.5" fill="currentColor" opacity="0.8">
      <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="16" cy="10.5" r="0.5" fill="currentColor" opacity="0.6">
      <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="16" cy="14.5" r="0.5" fill="currentColor" opacity="0.4">
      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.5s" repeatCount="indefinite" />
    </circle>
    
    {/* Connection ports */}
    <rect x="7" y="6" width="1.5" height="1" rx="0.2" fill="currentColor" opacity="0.6" />
    <rect x="9" y="6" width="1.5" height="1" rx="0.2" fill="currentColor" opacity="0.6" />
    <rect x="7" y="10" width="1.5" height="1" rx="0.2" fill="currentColor" opacity="0.6" />
    <rect x="9" y="10" width="1.5" height="1" rx="0.2" fill="currentColor" opacity="0.6" />
    
    {/* Data flow lines */}
    <path
      d="M12 17L12 19M10 17L10 19M14 17L14 19"
      stroke="currentColor"
      strokeWidth="1"
      strokeOpacity="0.5"
      strokeLinecap="round"
    />
  </svg>
);