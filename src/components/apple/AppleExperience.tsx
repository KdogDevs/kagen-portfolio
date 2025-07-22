import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { education, employment } from '@/data/content';
import { CalendarIcon, MapPinIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

export function AppleExperience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, rotateY: 5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section 
      id="experience"
      ref={ref}
      className="py-24 px-4 relative"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mx-auto max-w-7xl"
      >
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
          {/* Education Section */}
          <motion.div variants={itemVariants}>
            <div className="mb-12">
              <h2 className="text-4xl font-bold font-sf-pro-display mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Education
                </span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.school}
                  variants={cardVariants}
                  className="glass-lg rounded-3xl p-8 apple-transition hover:bg-white/30 dark:hover:bg-white/20"
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <div className="flex items-start gap-6">
                    {/* School logo */}
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 
                        flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {edu.logo ? (
                        <img 
                          src={edu.logo} 
                          alt={edu.school}
                          className="w-12 h-12 object-contain rounded-xl"
                          loading="lazy"
                        />
                      ) : (
                        <BuildingOfficeIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                      )}
                    </motion.div>

                    <div className="flex-1">
                      {/* Timeline */}
                      <div className="flex items-center gap-2 mb-2">
                        <CalendarIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <span className="text-sm font-medium font-sf-pro text-gray-600 dark:text-gray-400">
                          {edu.years}
                        </span>
                      </div>

                      {/* School name */}
                      <h3 className="text-xl font-bold font-sf-pro-display text-gray-900 dark:text-white mb-2">
                        {edu.school}
                      </h3>

                      {/* Degree */}
                      <p className="text-gray-700 dark:text-gray-300 font-sf-pro mb-4">
                        {edu.degree}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        {edu.achievements?.map((achievement, achievementIndex) => (
                          <motion.div
                            key={achievement}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + achievementIndex * 0.1 }}
                          >
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300 font-sf-pro">
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div variants={itemVariants}>
            <div className="mb-12">
              <h2 className="text-4xl font-bold font-sf-pro-display mb-4">
                <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  Experience
                </span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
            </div>

            <div className="space-y-8">
              {employment.map((job, index) => (
                <motion.div
                  key={job.company}
                  variants={cardVariants}
                  className="glass-lg rounded-3xl p-8 apple-transition hover:bg-white/30 dark:hover:bg-white/20"
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <div className="flex items-start gap-6">
                    {/* Company logo placeholder */}
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 
                        flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                    >
                      <BuildingOfficeIcon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                    </motion.div>

                    <div className="flex-1">
                      {/* Timeline */}
                      <div className="flex items-center gap-2 mb-2">
                        <CalendarIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <span className="text-sm font-medium font-sf-pro text-gray-600 dark:text-gray-400">
                          {job.years}
                        </span>
                      </div>

                      {/* Company & Position */}
                      <h3 className="text-xl font-bold font-sf-pro-display text-gray-900 dark:text-white mb-1">
                        {job.company}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 font-sf-pro mb-6">
                        {job.position}
                      </p>

                      {/* Responsibilities */}
                      <div className="space-y-3">
                        {job.responsibilities.map((responsibility, responsibilityIndex) => (
                          <motion.div
                            key={responsibility}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + responsibilityIndex * 0.1 }}
                          >
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 mt-2 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300 font-sf-pro leading-relaxed">
                              {responsibility}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Optional: Timeline connecting line for larger screens */}
        <motion.div
          className="hidden xl:block absolute left-1/2 top-32 bottom-32 w-px bg-gradient-to-b 
            from-blue-500/20 via-purple-500/40 to-cyan-500/20"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  );
}