import { FC } from 'react';

interface IconProps {
  className?: string;
}

export const HomeLabIcon: FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="homeLabGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    {/* House structure */}
    <path
      d="M3 12L12 3L21 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.7"
    />
    <path
      d="M5 10V20A1 1 0 006 21H18A1 1 0 0019 20V10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    
    {/* Server racks inside */}
    <rect x="8" y="13" width="2" height="6" rx="0.5" fill="url(#homeLabGradient)" opacity="0.8" />
    <rect x="11" y="13" width="2" height="6" rx="0.5" fill="url(#homeLabGradient)" opacity="0.6" />
    <rect x="14" y="13" width="2" height="6" rx="0.5" fill="url(#homeLabGradient)" opacity="0.4" />
    
    {/* Status lights */}
    <circle cx="9" cy="14" r="0.3" fill="currentColor" opacity="0.9">
      <animate attributeName="opacity" values="0.9;1;0.9" dur="1s" repeatCount="indefinite" />
    </circle>
    <circle cx="12" cy="14" r="0.3" fill="currentColor" opacity="0.7">
      <animate attributeName="opacity" values="0.7;1;0.7" dur="1.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="15" cy="14" r="0.3" fill="currentColor" opacity="0.5">
      <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" repeatCount="indefinite" />
    </circle>
    
    {/* WiFi signal */}
    <path
      d="M16 8C17.5 8 18.5 9 18.5 10.5"
      stroke="currentColor"
      strokeWidth="1"
      strokeOpacity="0.6"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M17 9C17.5 9 18 9.5 18 10"
      stroke="currentColor"
      strokeWidth="1"
      strokeOpacity="0.8"
      strokeLinecap="round"
      fill="none"
    />
    
    {/* Cable management */}
    <path
      d="M8 19L11 16L14 19"
      stroke="currentColor"
      strokeWidth="0.8"
      strokeOpacity="0.4"
      strokeLinecap="round"
      fill="none"
      strokeDasharray="1 1"
    />
  </svg>
);