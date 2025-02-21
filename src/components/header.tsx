import * as React from 'react';
import type { FC } from 'react';
import {
  SunIcon,
  MoonIcon,
  CodeBracketIcon,
  AcademicCapIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

export const Header: FC = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="fixed w-full flex justify-center px-4 py-6 z-50 top-4">
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-lg 
        border border-gray-200 dark:border-gray-700 w-full max-w-3xl">
        <div className="px-6 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-black dark:text-white bg-gradient-to-r from-blue-600 to-purple-600 
            bg-clip-text text-transparent">
            Kagen Jensen
          </h1>
          <nav className="flex items-center space-x-6">
            <a 
              href="#projects" 
              className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 
                dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <CodeBracketIcon className="h-5 w-5" />
              <span className="hidden sm:inline">Projects</span>
            </a>
            <a 
              href="#education" 
              className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 
                dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <AcademicCapIcon className="h-5 w-5" />
              <span className="hidden sm:inline">Education</span>
            </a>
            <a 
              href="#contact" 
              className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 
                dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <EnvelopeIcon className="h-5 w-5" />
              <span className="hidden sm:inline">Contact</span>
            </a>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 
                transition-colors duration-200 text-gray-600 dark:text-gray-300"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
          </nav>
        </div>
      </header>
    </div>
  );
};
