import { Project, Education, Employment, SocialLink, PersonalInfo, BioContent } from '../types';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { GitHubIcon } from '../components/icons/GitHub';

export const personalInfo: PersonalInfo = {
  name: "Kagen Jensen",
  title: "AI Solutions Architect & Network Specialist",
  about: "Im a tech enthusiast specializing in AI prompt engineering and networking solutions.",
  headshot: "/_PP_6585.jpg"
};

export const bioContent: BioContent = {
  title: "About Me",
  background: {
    title: "Background",
    description: "I'm a Senior in high school and i enjoy creating websites and programs that make an impact on poeples day to day lives. My journey in tech began with AI prompt engineering and has evolved into full-stack development and system architecture."
  },
  location: {
    title: "Location & Interests",
    description: "Based in Atlanta, Georgia, I split my time between my hobbie projects like building websites and School. I'm particularly interested in AI applications and network infrastructure."
  },
  technical: {
    title: "Technical Journey",
    description: "Starting with basic web development, using my extensive home lab I've expanded my skills to include system architecture, and network infrastructure. I've worked on projects ranging from school scheduling systems to corporate websites, always focusing on creating efficient and user-friendly solutions."
  },
  skills: [
    "AI Engineering",
    "Web Development",
    "Network Infrastructure",
    "System Architecture",
    "UI/UX Design",
    "Home Lab Enthusiast"
  ]
};

export const projects: Project[] = [
  {
    title: "Schedule SPX",
    description: "A comprehensive scheduling solution for Saint Pius X Catholic High School, streamlining class scheduling and student organization.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Node.js"],
    demoLink: "https://schedulespx.com",
    githubLink: "https://github.com/KdogDevs/schedule-spx",
    image: "/Schedulespx-immage.jpeg"
  },
  {
    title: "Shift 2 Stream",
    description: "Modern corporate website for Shift 2 Stream, featuring responsive design and seamless user experience. Showcasing company services and technology solutions.",
    technologies: ["React", "Tailwind CSS", "Node.js", "Framer Motion"],
    demoLink: "https://www.shift2stream.com",
    githubLink: "https://github.com/KdogDevs/shift2stream-website",
    image: "/public/s2s-immage.png"
  }
];

export const education: Education[] = [
  {
    school: "Saint Pius X Catholic High School",
    degree: "High School Diploma",
    years: "2021 - 2025",
    achievements: [
      "Fersatti Formation Coordinator",
      "Head of Broadcasting Department",
      "Schedule SPX Co-Creator and Lead Developer",
      "Technology Innovation Leader"
    ]
  }
];

export const employment: Employment[] = [
  {
    company: "Shift 2 Stream",
    position: "Lead Researcher & System Design Architect",
    years: "2022 - Present",
    responsibilities: [
      "Lead research initiatives for emerging technologies and industry trends",
      "Design and architect scalable system solutions",
      "Implement cutting-edge technologies into existing infrastructure",
      "Develop and maintain core system architecture",
      "Collaborate with development team on technical implementations"
    ]
  }
];

export const socialLinks: SocialLink[] = [
  {
    platform: "github",
    url: "https://github.com/kdogdevs",
    icon: "github",
    Component: GitHubIcon,
    label: "GitHub Profile"
  },
  {
    platform: "email",
    url: "mailto:kagen@kagen.dev",
    icon: "envelope",
    Component: EnvelopeIcon,
    label: "Email Contact"
  }
];

export const siteMetadata = {
  title: "Kagen Jensen - AI Solutions Architect & Network Specialist",
  description: "Portfolio of Kagen Jensen, showcasing innovative projects in AI, networking, and system architecture.",
  author: "Kagen Jensen",
  siteUrl: "https://kagen.dev",
  socialImage: "/_PP_6585.jpg",
  keywords: [
    "AI Solutions",
    "Network Architecture",
    "System Design",
    "Web Development",
    "Technology Innovation"
  ]
};
