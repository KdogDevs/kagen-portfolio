import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import { Project } from '../types';
import { MagneticButton } from './magnetic-button';
import { cn } from '../lib/utils';
import { getTechIcon } from './icons/tech';

interface EnhancedProjectCardProps {
  project: Project;
  index: number;
}

export const EnhancedProjectCard: FC<EnhancedProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{ once: true, amount: 0.3 }}
      className="group h-full"
    >
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        perspective={1000}
        glareEnable={true}
        glareMaxOpacity={0.15}
        glareColor="#3b82f6"
        glareBorderRadius="20px"
        scale={1.02}
        gyroscope={true}
        className="h-full"
      >
        <motion.div
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className={cn(
            "relative h-full bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg",
            "border border-white/20 dark:border-gray-700/20 rounded-2xl overflow-hidden",
            "shadow-xl hover:shadow-2xl transition-all duration-500",
            "before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-500/5 before:to-purple-500/5",
            "before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"
          )}
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10"
            animate={{
              background: isHovered 
                ? "linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.15), rgba(6, 182, 212, 0.15))"
                : "linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05), rgba(6, 182, 212, 0.05))",
            }}
            transition={{ duration: 0.5 }}
          />

          {/* Floating particles on hover */}
          {isHovered && (
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 8 }, (_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400 rounded-full"
                  initial={{ 
                    x: Math.random() * 300, 
                    y: Math.random() * 400,
                    opacity: 0 
                  }}
                  animate={{
                    y: [Math.random() * 400, -50],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          )}

          {/* Project Image */}
          <div className="relative h-56 overflow-hidden">
            <motion.div
              animate={{
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10"
            />
            
            {project.image && (
              <motion.img
                animate={{
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            )}
            
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              initial={{ x: "-100%" }}
              animate={{ x: isHovered ? "200%" : "-100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {/* Tech stack overlay */}
            <motion.div
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20
                flex items-end justify-start p-4"
            >
              <motion.div 
                className="flex flex-wrap gap-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {project.technologies.map((tech, techIndex) => {
                  const TechIcon = getTechIcon(tech);
                  return (
                    <motion.span
                      key={tech}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: isHovered ? 1 : 0, 
                        opacity: isHovered ? 1 : 0 
                      }}
                      transition={{ 
                        duration: 0.3, 
                        delay: techIndex * 0.1 + 0.2,
                        type: "spring",
                        stiffness: 200 
                      }}
                      className="px-3 py-1 text-xs rounded-full bg-white/20 text-white backdrop-blur-sm
                        border border-white/10 font-medium flex items-center gap-1.5"
                    >
                      <TechIcon className="w-3 h-3" />
                      {tech}
                    </motion.span>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="relative p-6 space-y-4 flex flex-col h-[calc(100%-14rem)] z-30">
            <motion.h3
              animate={{ 
                color: isHovered ? 'rgb(59, 130, 246)' : 'currentColor',
                scale: isHovered ? 1.02 : 1 
              }}
              transition={{ duration: 0.3 }}
              className="text-xl font-bold tracking-tight bg-clip-text"
            >
              {project.title}
            </motion.h3>
            
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-grow">
              {project.description}
            </p>

            {/* Enhanced Action Buttons */}
            <div className="flex gap-4 pt-2">
              {project.demoLink && (
                <MagneticButton 
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400
                    hover:text-blue-800 dark:hover:text-blue-300 transition-colors
                    px-4 py-2 rounded-xl bg-blue-50/50 dark:bg-blue-900/20 backdrop-blur-sm
                    border border-blue-200/50 dark:border-blue-800/50"
                >
                  <span>Live Demo</span>
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                </MagneticButton>
              )}
              
              {project.githubLink && (
                <MagneticButton 
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-400
                    hover:text-gray-800 dark:hover:text-gray-200 transition-colors
                    px-4 py-2 rounded-xl bg-gray-50/50 dark:bg-gray-800/20 backdrop-blur-sm
                    border border-gray-200/50 dark:border-gray-700/50"
                >
                  <span>View Code</span>
                  <CodeBracketIcon className="w-4 h-4" />
                </MagneticButton>
              )}
            </div>
          </div>

          {/* Corner highlight */}
          <motion.div
            className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-400/20 to-transparent"
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.8,
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </Tilt>
    </motion.div>
  );
};