import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { bioContent } from '@/data/content';
import { 
  CommandLineIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  CpuChipIcon,
  PaintBrushIcon,
  ServerIcon
} from '@heroicons/react/24/outline';

const skillIcons = {
  'AI Engineering': CommandLineIcon,
  'Web Development': GlobeAltIcon,
  'Network Infrastructure': ServerIcon,
  'System Architecture': CpuChipIcon,
  'UI/UX Design': PaintBrushIcon,
  'Home Lab Enthusiast': AcademicCapIcon,
};

export function AppleBio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section 
      id="about"
      ref={ref}
      className="py-24 px-4 relative"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mx-auto max-w-7xl"
      >
        {/* Section title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-sf-pro-display mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {bioContent.title}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Bio content cards */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
            {/* Background card */}
            <motion.div
              variants={cardVariants}
              className="glass-lg rounded-3xl p-8 apple-transition hover:bg-white/30 dark:hover:bg-white/15"
              whileHover={{ y: -4 }}
            >
              <h3 className="text-2xl font-semibold font-sf-pro-display mb-4 text-gray-900 dark:text-white">
                {bioContent.background.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-sf-pro">
                {bioContent.background.description}
              </p>
            </motion.div>

            {/* Location & Interests card */}
            <motion.div
              variants={cardVariants}
              className="glass-lg rounded-3xl p-8 apple-transition hover:bg-white/30 dark:hover:bg-white/15"
              whileHover={{ y: -4 }}
            >
              <h3 className="text-2xl font-semibold font-sf-pro-display mb-4 text-gray-900 dark:text-white">
                {bioContent.location.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-sf-pro">
                {bioContent.location.description}
              </p>
            </motion.div>

            {/* Technical Journey card */}
            <motion.div
              variants={cardVariants}
              className="glass-lg rounded-3xl p-8 apple-transition hover:bg-white/30 dark:hover:bg-white/15"
              whileHover={{ y: -4 }}
            >
              <h3 className="text-2xl font-semibold font-sf-pro-display mb-4 text-gray-900 dark:text-white">
                {bioContent.technical.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-sf-pro">
                {bioContent.technical.description}
              </p>
            </motion.div>
          </motion.div>

          {/* Skills sidebar */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              variants={cardVariants}
              className="glass-lg rounded-3xl p-8 apple-transition hover:bg-white/30 dark:hover:bg-white/15"
            >
              <h3 className="text-2xl font-semibold font-sf-pro-display mb-6 text-gray-900 dark:text-white">
                Core Expertise
              </h3>
              
              <div className="space-y-4">
                {bioContent.skills.map((skill, index) => {
                  const IconComponent = skillIcons[skill as keyof typeof skillIcons] || CommandLineIcon;
                  
                  return (
                    <motion.div
                      key={skill}
                      className="flex items-center gap-4 p-4 rounded-2xl glass-sm apple-transition
                        hover:bg-white/40 dark:hover:bg-white/20"
                      whileHover={{ scale: 1.02, x: 4 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                        <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="font-medium font-sf-pro text-gray-800 dark:text-gray-200">
                        {skill}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                className="mt-8 pt-6 border-t border-white/20 dark:border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <p className="text-center text-gray-600 dark:text-gray-400 font-sf-pro italic">
                  Always learning, always growing
                </p>
              </motion.div>
            </motion.div>

            {/* CTA card */}
            <motion.div
              variants={cardVariants}
              className="glass-lg rounded-3xl p-8 text-center apple-transition hover:bg-white/30 dark:hover:bg-white/15"
            >
              <p className="text-gray-700 dark:text-gray-300 mb-6 font-sf-pro">
                Passionate about creating innovative solutions that make a meaningful impact.
              </p>
              
              <div className="flex flex-col gap-3">
                <motion.button
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white
                    rounded-2xl font-semibold font-sf-pro apple-transition hover:shadow-lg"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore My Work
                </motion.button>
                
                <motion.button
                  className="w-full px-6 py-3 glass-md rounded-2xl font-semibold font-sf-pro apple-transition
                    text-gray-700 dark:text-gray-300 hover:bg-white/40 dark:hover:bg-white/20"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Let's Connect
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}