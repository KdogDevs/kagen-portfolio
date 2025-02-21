import * as React from 'react';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types/main';
import { projects } from '../data/content';
import { 
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-white dark:bg-gray-800/50 rounded-xl overflow-hidden
        backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 h-full"
    >
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden">
        <motion.div
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10"
        />
        {project.image && (
          <motion.img
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        )}
        
        {/* Overlay with Tech Stack */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-20
            flex items-end justify-start p-4"
        >
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-full bg-white/20 text-white backdrop-blur-sm
                  border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4 flex flex-col h-[calc(100%-14rem)]">
        <motion.h3
          animate={{ color: isHovered ? 'rgb(37, 99, 235)' : 'currentColor' }}
          className="text-xl font-bold tracking-tight"
        >
          {project.title}
        </motion.h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Links */}
        <div className="flex gap-4 pt-2">
          {project.demoLink && (
            <motion.a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400
                hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              whileHover={{ x: 2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Live Demo</span>
              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
            </motion.a>
          )}
          {project.githubLink && (
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400
                hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              whileHover={{ x: 2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>View Code</span>
              <CodeBracketIcon className="w-4 h-4" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Decorative Background */}
      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
        className="absolute -z-10 inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 
          blur-xl rounded-xl transform -rotate-3"
      />
    </motion.div>
  );
};

export const ProjectsSection: FC = () => {
  const count = projects.length;

  const containerClass = "flex flex-col items-center justify-center w-full";
  
  const layoutClass =
    count === 1
      ? "w-full max-w-xl px-4"
      : count === 2
      ? "w-full max-w-4xl px-4 grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center"
      : "w-full max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 place-items-center";

  const cardWidthClass =
    count === 1
      ? "w-full max-w-xl"
      : count === 2
      ? "w-full max-w-lg"
      : "w-full max-w-lg";

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="text-center space-y-4 px-4">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>

        <div className={containerClass}>
          <div className={layoutClass}>
            {projects.map((project, index) => (
              <motion.div 
                key={project.title} 
                className={cardWidthClass}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
