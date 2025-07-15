import { FC } from 'react';

interface IconProps {
  className?: string;
}

export const WebDevIcon: FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="webGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    {/* Browser window frame */}
    <rect
      x="2"
      y="4"
      width="20"
      height="16"
      rx="2"
      ry="2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Browser header */}
    <rect
      x="2"
      y="4"
      width="20"
      height="4"
      rx="2"
      ry="2"
      fill="url(#webGradient)"
      opacity="0.3"
    />
    {/* Browser dots */}
    <circle cx="5" cy="6" r="0.5" fill="currentColor" opacity="0.8" />
    <circle cx="7" cy="6" r="0.5" fill="currentColor" opacity="0.8" />
    <circle cx="9" cy="6" r="0.5" fill="currentColor" opacity="0.8" />
    {/* Code brackets */}
    <path
      d="M8 12L6 14L8 16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.8"
    />
    <path
      d="M16 12L18 14L16 16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.8"
    />
    {/* Forward slash */}
    <line
      x1="13"
      y1="12"
      x2="11"
      y2="16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.6"
    />
  </svg>
);