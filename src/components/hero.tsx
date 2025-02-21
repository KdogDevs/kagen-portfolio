import * as React from 'react';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import { personalInfo, socialLinks } from '../data/content';
import { 
  CommandLineIcon, 
  CodeBracketIcon,
  CpuChipIcon,
  ArrowDownIcon 
} from '@heroicons/react/24/outline';

export const Hero: FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingIconsVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <section className="h-[82vh] pt-16 pb-8 px-4 md:px-8 overflow-hidden flex items-center relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center"
      >
        {/* Text Content */}
        <motion.div className="space-y-6 text-center md:text-left relative">
          {/* Floating Icons */}
          <motion.div
            variants={floatingIconsVariants}
            animate="animate"
            className="absolute -left-8 top-0 text-blue-500/20 dark:text-blue-400/20"
          >
            <CommandLineIcon className="w-14 h-14" />
          </motion.div>
          <motion.div
            variants={floatingIconsVariants}
            animate="animate"
            transition={{ delay: 1 }}
            className="absolute right-0 top-20 text-purple-500/20 dark:text-purple-400/20"
          >
            <CodeBracketIcon className="w-16 h-16" />
          </motion.div>
          <motion.div
            variants={floatingIconsVariants}
            animate="animate"
            transition={{ delay: 2 }}
            className="absolute -left-4 bottom-0 text-indigo-500/20 dark:text-indigo-400/20"
          >
            <CpuChipIcon className="w-14 h-14" />
          </motion.div>

          {/* Main Content */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h2 className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium">
              Welcome, I'm
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium">
              {personalInfo.title}
            </p>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto md:mx-0"
          >
            {personalInfo.about}
          </motion.p>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex gap-5 justify-center md:justify-start pt-2"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400
                  transform transition-all duration-200 hover:scale-110 p-2.5 rounded-xl
                  hover:bg-blue-50 dark:hover:bg-blue-900/10"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.Component className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          variants={imageVariants}
          className="relative group"
        >
          <div className="relative w-60 h-60 mx-auto md:w-[24rem] md:h-[24rem]">
            {/* Animated Background Gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl"
              animate={{
                rotate: [6, 12, 6],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            
            {/* Image */}
            <motion.div
              className="absolute inset-0 overflow-hidden rounded-2xl"
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={personalInfo.headshot}
                alt={personalInfo.name}
                className="w-full h-full object-cover transform transition-transform duration-300"
                style={{ objectPosition: 'center top' }}
              />
            </motion.div>
          </div>

          {/* Decorative Background Blurs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.2, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute -z-10 top-1/2 left-1/2 w-80 h-80 
              bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.2, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.5,
            }}
            className="absolute -z-10 top-1/2 left-1/2 w-80 h-80
              bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 translate-x-4"
          />
        </motion.div>
      </motion.div>

      {/* Scroll Indicator - Moved outside the grid */}
      <motion.div
        variants={itemVariants}
        className="hidden md:flex items-center gap-2 text-gray-400 dark:text-gray-500 text-sm
          absolute bottom-8 left-1/2 -translate-x-1/2 hover:text-gray-600 dark:hover:text-gray-300
          transition-colors duration-300"
      >
        <ArrowDownIcon className="w-4 h-4 animate-bounce" />
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
};
