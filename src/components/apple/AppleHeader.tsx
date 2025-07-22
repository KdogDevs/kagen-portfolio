import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { personalInfo } from '@/data/content';
import { 
  CodeBracketIcon,
  AcademicCapIcon,
  EnvelopeIcon,
  SunIcon,
  MoonIcon
} from '@heroicons/react/24/outline';

export function AppleHeader() {
  const [isDark, setIsDark] = useState(false);
  const { scrollY } = useScroll();
  
  // Create glass effect on scroll
  const headerOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);
  const headerBlur = useTransform(scrollY, [0, 100], [8, 20]);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const saved = localStorage.getItem('theme');
    const isDarkMode = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDark(isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const navItems = [
    { label: 'Projects', href: '#projects', icon: CodeBracketIcon },
    { label: 'Experience', href: '#experience', icon: AcademicCapIcon },
    { label: 'Contact', href: '#contact', icon: EnvelopeIcon },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
      style={{
        backdropFilter: useTransform(headerBlur, (value) => `blur(${value}px) saturate(150%)`),
      }}
    >
      <motion.div
        className="mx-auto max-w-7xl"
        style={{ opacity: headerOpacity }}
      >
        <motion.nav
          className="glass-md rounded-2xl px-6 py-3 shadow-lg"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-white font-bold text-lg">
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </span>
              </motion.div>
              <span className="font-sf-pro-display font-semibold text-gray-900 dark:text-white text-lg">
                {personalInfo.name}
              </span>
            </motion.div>

            {/* Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center space-x-2 px-4 py-2 rounded-xl apple-transition
                    text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400
                    hover:bg-white/40 dark:hover:bg-white/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                >
                  <item.icon className="w-4 h-4 group-hover:scale-110 apple-transition" />
                  <span className="font-medium font-sf-pro">{item.label}</span>
                </motion.a>
              ))}
            </div>

            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-3 rounded-xl glass-sm apple-transition
                hover:scale-105 hover:bg-white/50 dark:hover:bg-white/20
                text-gray-700 dark:text-gray-300"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              <motion.div
                key={isDark ? 'dark' : 'light'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {isDark ? (
                  <SunIcon className="w-5 h-5" />
                ) : (
                  <MoonIcon className="w-5 h-5" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </motion.nav>
      </motion.div>
    </motion.header>
  );
}