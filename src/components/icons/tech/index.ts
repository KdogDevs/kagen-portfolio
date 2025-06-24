// src/components/icons/tech/index.ts
export { ReactIcon } from './ReactIcon';
export { JavaScriptIcon } from './JavaScriptIcon';
export { TailwindIcon } from './TailwindIcon';
export { NodeIcon } from './NodeIcon';
export { FramerMotionIcon } from './FramerMotionIcon';

import { FC } from 'react';
import { ReactIcon } from './ReactIcon';
import { JavaScriptIcon } from './JavaScriptIcon';
import { TailwindIcon } from './TailwindIcon';
import { NodeIcon } from './NodeIcon';
import { FramerMotionIcon } from './FramerMotionIcon';
import { CodeBracketIcon } from '@heroicons/react/24/outline';

export const techIcons: Record<string, FC<{ className?: string }>> = {
  'React': ReactIcon,
  'JavaScript': JavaScriptIcon,
  'Tailwind CSS': TailwindIcon,
  'Node.js': NodeIcon,
  'Framer Motion': FramerMotionIcon,
};

export const getTechIcon = (tech: string): FC<{ className?: string }> => {
  return techIcons[tech] || CodeBracketIcon;
};