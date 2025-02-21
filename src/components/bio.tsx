import * as React from 'react';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import { bioContent } from '../data/content';
import { MapPinIcon, UserIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

export const Bio: FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      id="about"
      className="py-12"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {bioContent.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Personal Background */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
              <UserIcon className="w-5 h-5" />
              <h3 className="font-semibold">{bioContent.background.title}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {bioContent.background.description}
            </p>
          </div>

          {/* Location & Interests */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
              <MapPinIcon className="w-5 h-5" />
              <h3 className="font-semibold">{bioContent.location.title}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {bioContent.location.description}
            </p>
          </div>

          {/* Technical Journey */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
              <CodeBracketIcon className="w-5 h-5" />
              <h3 className="font-semibold">{bioContent.technical.title}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {bioContent.technical.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {bioContent.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 
                    text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
