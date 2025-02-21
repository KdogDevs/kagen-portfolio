// src/components/timeline.tsx
import * as React from 'react';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { Education, Employment } from '../types'; // Changed from '../types/main'
import { education, employment } from '../data/content';
import { 
  AcademicCapIcon,
  BriefcaseIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

interface TimelineProps {
  items: (Education | Employment)[];
  type: 'education' | 'employment';
}

export const Timeline: FC<TimelineProps> = ({ items, type }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const renderListItems = (items: string[] | undefined) => {
    if (!items || items.length === 0) return null;

    return (
      <motion.ul className="mt-4 space-y-2">
        {items.map((item, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + idx * 0.1 }}
            className="flex items-start space-x-2 text-gray-600 dark:text-gray-400"
          >
            <ChevronRightIcon className="w-4 h-4 mt-1 flex-shrink-0 text-blue-500" />
            <span className="text-sm">{item}</span>
          </motion.li>
        ))}
      </motion.ul>
    );
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative space-y-12"
    >
      {/* Timeline line */}
      <div className="absolute left-[2.4rem] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 opacity-20" />
      
      {items.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="relative flex gap-6"
        >
          {/* Icon Column */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 * index }}
            className="relative flex-shrink-0 w-20"
          >
            <div className="absolute left-0 w-12 h-12 flex items-center justify-center rounded-xl 
              bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg 
              ring-4 ring-white dark:ring-gray-900 group"
            >
              {type === 'education' ? (
                <AcademicCapIcon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              ) : (
                <BriefcaseIcon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              )}
            </div>
          </motion.div>

          {/* Content Card */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
            className="flex-1 bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-lg 
              border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm
              hover:border-blue-500/20 transition-colors duration-300"
          >
            {/* Date */}
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {item.years}
              </p>
              <span className="px-3 py-1 text-xs font-medium rounded-full
                bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                {type === 'education' ? 'Education' : 'Work'}
              </span>
            </div>

            {/* Title */}
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {type === 'education' ? (item as Education).school : (item as Employment).company}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">
                {type === 'education' ? (item as Education).degree : (item as Employment).position}
              </p>
            </div>

            {/* Achievements/Responsibilities */}
            {type === 'education'
              ? renderListItems((item as Education).achievements)
              : renderListItems((item as Employment).responsibilities)
            }
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// Section components remain the same, but with updated max-width and padding
export const EducationSection: FC = () => {
  return (
    <section className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto space-y-6"
      >
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            My academic journey and achievements.
          </p>
        </div>

        <Timeline items={education} type="education" />
      </motion.div>
    </section>
  );
};

export const WorkSection: FC = () => {
  return (
    <section className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto space-y-6"
      >
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            My professional journey and responsibilities.
          </p>
        </div>

        <Timeline items={employment} type="employment" />
      </motion.div>
    </section>
  );
};
