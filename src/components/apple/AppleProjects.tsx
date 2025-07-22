import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { projects } from '@/data/content';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

export function AppleProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
    hidden: { opacity: 0, scale: 0.9, rotateX: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section 
      id="projects"
      ref={ref}
      className="py-24 px-4 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mx-auto max-w-7xl relative z-10"
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-sf-pro-display mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-sf-pro max-w-3xl mx-auto">
            Showcasing innovative solutions that combine cutting-edge technology with exceptional user experience
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group perspective-1000"
              style={{ 
                transformStyle: 'preserve-3d',
              }}
            >
              <motion.div
                className="glass-lg rounded-3xl overflow-hidden apple-transition
                  hover:bg-white/40 dark:hover:bg-white/20 shadow-xl hover:shadow-2xl"
                whileHover={{ 
                  y: -8,
                  rotateY: 2,
                  rotateX: 2,
                  scale: 1.02
                }}
                transition={{ duration: 0.4 }}
              >
                {/* Project image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-72 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    loading="lazy"
                  />
                  
                  {/* Overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 
                      group-hover:opacity-100 apple-transition flex items-end justify-start p-6"
                  >
                    <div className="flex gap-3">
                      <motion.a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 glass-md rounded-xl text-white font-medium font-sf-pro
                          hover:bg-white/30 apple-transition flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                      
                      {project.githubLink && (
                        <motion.a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 glass-md rounded-xl text-white font-medium font-sf-pro
                            hover:bg-white/30 apple-transition flex items-center gap-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <CodeBracketIcon className="w-4 h-4" />
                          Code
                        </motion.a>
                      )}
                    </div>
                  </motion.div>

                  {/* Technology badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 glass-sm rounded-full text-xs font-medium font-sf-pro
                          text-gray-700 dark:text-gray-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + techIndex * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 3 && (
                      <motion.span
                        className="px-3 py-1 glass-sm rounded-full text-xs font-medium font-sf-pro
                          text-gray-700 dark:text-gray-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 }}
                      >
                        +{project.technologies.length - 3}
                      </motion.span>
                    )}
                  </div>
                </div>

                {/* Project content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold font-sf-pro-display mb-4 text-gray-900 dark:text-white
                    group-hover:text-blue-600 dark:group-hover:text-blue-400 apple-transition">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-sf-pro mb-6">
                    {project.description}
                  </p>

                  {/* Technology stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-xl text-sm
                          font-medium font-sf-pro text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600
                        text-white rounded-2xl font-semibold font-sf-pro text-center apple-transition
                        hover:from-blue-700 hover:to-purple-700 hover:shadow-lg"
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="flex items-center justify-center gap-2">
                        <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                        Live Demo
                      </span>
                    </motion.a>
                    
                    {project.githubLink && (
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 glass-md rounded-2xl font-semibold font-sf-pro
                          text-gray-700 dark:text-gray-300 hover:bg-white/40 dark:hover:bg-white/20 apple-transition"
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="flex items-center gap-2">
                          <CodeBracketIcon className="w-5 h-5" />
                          Code
                        </span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View all projects CTA */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/kdogdevs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 glass-lg rounded-2xl
              font-semibold font-sf-pro text-gray-700 dark:text-gray-300
              hover:bg-white/40 dark:hover:bg-white/20 apple-transition"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Projects</span>
            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}