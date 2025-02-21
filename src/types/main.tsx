import { FC, SVGProps } from 'react';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
  image?: string;
}

export interface Education {
  school: string;
  degree: string;
  years: string;
  achievements?: string[];
}

export interface Employment {
  company: string;
  position: string;
  years: string;
  responsibilities: string[];
}

export type IconComponent = FC<SVGProps<SVGSVGElement> & { className?: string }>;

export interface SocialLink {
  platform: 'github' | 'discord' | 'email';
  url: string;
  icon: string;
  Component: IconComponent;
  label?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  about: string;
  headshot: string;
}

// New Bio Content Interface
export interface BioContent {
  title: string;
  background: {
    title: string;
    description: string;
  };
  location: {
    title: string;
    description: string;
  };
  technical: {
    title: string;
    description: string;
  };
  skills: string[];
}

export interface Theme {
  isDark: boolean;
  toggleTheme: () => void;
}

export interface NavLink {
  href: string;
  label: string;
  icon: IconComponent;
}

export interface AnimationProps {
  initial?: object;
  animate?: object;
  exit?: object;
  transition?: object;
}

export interface StyleProps {
  className?: string;
  style?: React.CSSProperties;
}

export type AnimatedComponentProps = AnimationProps & StyleProps;

export interface SectionHeadingProps extends StyleProps {
  title: string;
  subtitle?: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
    discord: string;
    email: string;
  };
  metadata: SocialMetadata;
}

export interface SocialMetadata {
  title: string;
  description: string;
  image: string;
  url: string;
}
