import * as React from 'react';
import type { FC } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  SunIcon,
  MoonIcon,
  CodeBracketIcon,
  AcademicCapIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import { MagneticButton } from './magnetic-button';

export const EnhancedHeader: FC = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const { scrollY } = useScroll();
  
  const headerOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);
  const headerBlur = useTransform(scrollY, [0, 100], [8, 16]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navItems = [
    { href: "#projects", icon: CodeBracketIcon, label: "Projects" },
    { href: "#education", icon: AcademicCapIcon, label: "Education" },
    { href: "#contact", icon: EnvelopeIcon, label: "Contact" },
  ];

  return (
    <motion.div 
      className="fixed w-full flex justify-center px-4 py-6 z-50 top-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.header 
        className="relative w-full max-w-4xl"
        style={{
          backdropFilter: `blur(${headerBlur}px)`,
        }}
      >
        {/* Background with enhanced glass effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl border border-white/20 dark:border-gray-700/20"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(16px)",
            opacity: headerOpacity,
          }}
        />
        
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10"
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative px-6 py-3 flex justify-between items-center">
          <motion.h1 
            className="text-xl font-bold"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Kagen Jensen
            </span>
          </motion.h1>
          
          <nav className="flex items-center space-x-2">
            {navItems.map((item, index) => (
              <MagneticButton key={item.href} intensity={0.2}>
                <motion.a 
                  href={item.href}
                  className="flex items-center space-x-2 px-4 py-2 rounded-xl text-gray-600 hover:text-blue-600 
                    dark:text-gray-300 dark:hover:text-blue-400 transition-all duration-300
                    hover:bg-white/20 dark:hover:bg-gray-800/20 backdrop-blur-sm
                    border border-transparent hover:border-blue-200/50 dark:hover:border-blue-800/50"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="hidden md:inline font-medium">{item.label}</span>
                </motion.a>
              </MagneticButton>
            ))}
            
            <MagneticButton intensity={0.3}>
              <motion.button
                onClick={toggleDarkMode}
                className="p-3 rounded-xl hover:bg-white/20 dark:hover:bg-gray-800/20 
                  transition-all duration-300 text-gray-600 dark:text-gray-300
                  border border-transparent hover:border-gray-200/50 dark:hover:border-gray-700/50"
                aria-label="Toggle dark mode"
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  animate={{ rotate: isDarkMode ? 180 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {isDarkMode ? (
                    <SunIcon className="h-5 w-5" />
                  ) : (
                    <MoonIcon className="h-5 w-5" />
                  )}
                </motion.div>
              </motion.button>
            </MagneticButton>
          </nav>
        </div>
        
        {/* Bottom glow line */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px 
            bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scaleX: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.header>
    </motion.div>
  );
};