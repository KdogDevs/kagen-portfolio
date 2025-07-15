import { FC } from 'react';

interface IconProps {
  className?: string;
}

export const NetworkIcon: FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    {/* Central hub */}
    <circle
      cx="12"
      cy="12"
      r="3"
      fill="url(#networkGradient)"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    {/* Outer nodes */}
    <circle cx="6" cy="6" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
    <circle cx="18" cy="6" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
    <circle cx="6" cy="18" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
    <circle cx="18" cy="18" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
    
    {/* Connection lines */}
    <path
      d="M9 9L15 15M15 9L9 15"
      stroke="currentColor"
      strokeWidth="1"
      strokeOpacity="0.4"
      strokeLinecap="round"
      strokeDasharray="2 2"
    />
    
    {/* Data flow indicators */}
    <circle cx="9" cy="7.5" r="0.5" fill="currentColor" opacity="0.6">
      <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="15" cy="7.5" r="0.5" fill="currentColor" opacity="0.6">
      <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" begin="0.5s" />
    </circle>
    <circle cx="9" cy="16.5" r="0.5" fill="currentColor" opacity="0.6">
      <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" begin="1s" />
    </circle>
    <circle cx="15" cy="16.5" r="0.5" fill="currentColor" opacity="0.6">
      <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" begin="1.5s" />
    </circle>
  </svg>
);