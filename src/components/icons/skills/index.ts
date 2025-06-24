// src/components/icons/skills/index.ts
export { AIEngineeringIcon } from './AIEngineering';
export { WebDevelopmentIcon } from './WebDevelopment';
export { NetworkInfrastructureIcon } from './NetworkInfrastructure';
export { SystemArchitectureIcon } from './SystemArchitecture';
export { UIUXDesignIcon } from './UIUXDesign';
export { HomeLabEnthusiastIcon } from './HomeLabEnthusiast';

import { FC } from 'react';
import { AIEngineeringIcon } from './AIEngineering';
import { WebDevelopmentIcon } from './WebDevelopment';
import { NetworkInfrastructureIcon } from './NetworkInfrastructure';
import { SystemArchitectureIcon } from './SystemArchitecture';
import { UIUXDesignIcon } from './UIUXDesign';
import { HomeLabEnthusiastIcon } from './HomeLabEnthusiast';

export const skillIcons: Record<string, FC<{ className?: string }>> = {
  'AI Engineering': AIEngineeringIcon,
  'Web Development': WebDevelopmentIcon,
  'Network Infrastructure': NetworkInfrastructureIcon,
  'System Architecture': SystemArchitectureIcon,
  'UI/UX Design': UIUXDesignIcon,
  'Home Lab Enthusiast': HomeLabEnthusiastIcon,
};