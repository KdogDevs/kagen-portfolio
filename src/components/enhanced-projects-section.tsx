import { FC } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data/content';
import { EnhancedProjectCard } from './enhanced-project-card';

export const EnhancedProjectsSection: FC = () => {
  const [ref, inView] = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  });

  const count = projects.length;

  const containerClass = "flex flex-col items-center justify-center w-full";
  
  const layoutClass =
    count === 1
      ? "w-full max-w-xl px-4"
      : count === 2
      ? "w-full max-w-5xl px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center"
      : "w-full max-w-7xl px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center";

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section 
      ref={ref}
      id="projects"
      className="w-full py-32 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </div>

      <div className={containerClass}>
        {/* Section Header */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16 max-w-3xl"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent bg-300% animate-gradient-x">
              Featured Projects
            </span>
          </motion.h2>
          
          <motion.p 
            variants={subtitleVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            Showcasing innovative solutions that combine cutting-edge technology with exceptional user experience
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "100%" } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-8 mx-auto max-w-xs"
          />
        </motion.div>

        {/* Projects Grid */}
        <div className={layoutClass}>
          {projects.map((project, index) => (
            <EnhancedProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="https://github.com/kdogdevs"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold
              bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl
              shadow-lg hover:shadow-xl transition-all duration-300
              hover:from-blue-700 hover:to-purple-700"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Projects</span>
            <motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};