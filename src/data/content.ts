import { Project, Education, Employment, SocialLink, PersonalInfo, BioContent } from '../types';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { GitHubIcon } from '../components/icons/GitHub';

export const personalInfo: PersonalInfo = {
  name: "Kagen Jensen",
  title: "Electrical Engineering Student & AI Solutions Architect",
  about: "I'm an electrical engineering student at the University of Alabama, specializing in AI prompt engineering and networking solutions.",
  headshot: "https://imagedelivery.net/JAQRWjwDZP50j-W_ZtafYA/kagen-photo-1/public",
  extraImages: [
    "https://imagedelivery.net/JAQRWjwDZP50j-W_ZtafYA/kagen-photo-2/public",
    "https://imagedelivery.net/JAQRWjwDZP50j-W_ZtafYA/kagen-photo-3/public"
  ]
};

export const bioContent: BioContent = {
  title: "About Me",
  background: {
    title: "Background",
    description: "I recently graduated from Saint Pius X Catholic High School in May 2025 and now attend the University of Alabama, where I'm majoring in electrical engineering. I enjoy creating websites and programs that make an impact on people's day-to-day lives. My journey in tech began with AI prompt engineering and has evolved into full-stack development and system architecture."
  },
  location: {
    title: "Location & Interests",
    description: "Based in Atlanta, Georgia, I split my time between my studies at the University of Alabama and my hobby projects like building websites and applications. I'm particularly interested in AI applications, network infrastructure, and the intersection of technology with electrical engineering."
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
    image: "https://imagedelivery.net/JAQRWjwDZP50j-W_ZtafYA/57e8080a-1d33-4720-e503-585d9fac9a00/public"
  },
  {
    title: "Shift 2 Stream",
    description: "Modern corporate website for Shift 2 Stream, featuring responsive design and seamless user experience. Showcasing company services and technology solutions.",
    technologies: ["React", "Tailwind CSS", "Node.js", "Framer Motion"],
    demoLink: "https://www.shift2stream.com",
    githubLink: "https://github.com/KdogDevs/shift2stream-website",
    image: "https://imagedelivery.net/JAQRWjwDZP50j-W_ZtafYA/a79a5386-0dc9-4ab6-a106-cf881bffae00/public"
  }
];

export const education: Education[] = [
  {
    school: "University of Alabama",
    degree: "Bachelor of Science in Electrical Engineering",
    years: "2025 - Present",
    logo: "https://imagedelivery.net/JAQRWjwDZP50j-W_ZtafYA/b322266a-9c3a-42b4-e29a-6797bb0cd400/public",
    achievements: [
      "Electrical Engineering Major",
      "Technology Innovation Focus",
      "Leadership Development Program",
      "Academic Excellence"
    ]
  },
  {
    school: "Saint Pius X Catholic High School",
    degree: "High School Diploma",
    years: "2021 - 2025",
    logo: "https://imagedelivery.net/JAQRWjwDZP50j-W_ZtafYA/aa1b392b-5480-43dd-a2c0-3c5e1eb1af00/public",
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
  title: "Kagen Jensen - Electrical Engineering Student, AI Solutions Architect & Developer Portfolio",
  description: "Official portfolio of Kagen Jensen - University of Alabama electrical engineering student and AI solutions architect. Showcasing innovative projects in artificial intelligence, network architecture, web development, and system design. Contact Kagen for collaboration opportunities.",
  author: "Kagen Jensen",
  siteUrl: "https://kagen.dev",
  socialImage: "https://imagedelivery.net/JAQRWjwDZP50j-W_ZtafYA/kagen-photo-1/public",
  keywords: [
    "Kagen Jensen",
    "Kagen",
    "Electrical Engineering Student",
    "AI Solutions Architect", 
    "University of Alabama",
    "Web Developer",
    "AI Engineering",
    "Network Architecture",
    "System Design",
    "Web Development",
    "Technology Innovation",
    "Full Stack Developer",
    "Atlanta Georgia",
    "Software Engineer",
    "Portfolio",
    "React Developer",
    "JavaScript Developer",
    "Node.js Developer"
  ]
};
