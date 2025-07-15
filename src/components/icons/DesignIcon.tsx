import { FC } from 'react';

interface IconProps {
  className?: string;
}

export const DesignIcon: FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="designGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    {/* Pen tool */}
    <path
      d="M3 21L12 12L21 3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.8"
    />
    {/* Pen tip */}
    <path
      d="M15 6L18 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Design elements */}
    <circle cx="8" cy="8" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    <rect x="14" y="14" width="4" height="4" rx="1" fill="url(#designGradient)" opacity="0.4" />
    
    {/* Creative sparks */}
    <path
      d="M6 4L7 2M4 6L2 7M8 2L9 4M2 8L4 9"
      stroke="currentColor"
      strokeWidth="1"
      strokeOpacity="0.6"
      strokeLinecap="round"
    />
    
    {/* Color palette */}
    <circle cx="19" cy="19" r="1" fill="currentColor" opacity="0.8" />
    <circle cx="17" cy="19" r="1" fill="currentColor" opacity="0.6" />
    <circle cx="19" cy="17" r="1" fill="currentColor" opacity="0.4" />
  </svg>
);