import { FC } from 'react';

interface IconProps {
  className?: string;
}

export const AIIcon: FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    {/* Brain/Neural Network design */}
    <path
      d="M12 3C8.5 3 6 5.5 6 9c0 1.5 0.5 3 1.5 4L9 14.5c0.5 0.5 1.5 0.5 2 0L12 13.5l1 1c0.5 0.5 1.5 0.5 2 0L16.5 13c1-1 1.5-2.5 1.5-4 0-3.5-2.5-6-6-6z"
      fill="url(#aiGradient)"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Neural connections */}
    <circle cx="8" cy="8" r="1" fill="currentColor" opacity="0.8" />
    <circle cx="12" cy="7" r="1" fill="currentColor" opacity="0.8" />
    <circle cx="16" cy="8" r="1" fill="currentColor" opacity="0.8" />
    <circle cx="10" cy="10" r="0.5" fill="currentColor" opacity="0.6" />
    <circle cx="14" cy="10" r="0.5" fill="currentColor" opacity="0.6" />
    {/* Data flow lines */}
    <path
      d="M8 8L12 7M12 7L16 8M10 10L8 8M14 10L16 8M10 10L14 10"
      stroke="currentColor"
      strokeWidth="1"
      strokeOpacity="0.4"
      strokeLinecap="round"
    />
    {/* Extension tendrils */}
    <path
      d="M9 14.5L7 17M15 14.5L17 17M12 13.5V16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeOpacity="0.6"
      strokeLinecap="round"
    />
  </svg>
);