import { FC } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { bioContent } from '../data/content';

export const EnhancedBio: FC = () => {
  const [ref, inView] = useInView({ 
    threshold: 0.2, 
    triggerOnce: true 
  });
  const { scrollY } = useScroll();
  
  const yParallax = useTransform(scrollY, [0, 1000], [0, -100]);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
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
      ref={ref}
      className="mobile-optimized-spacing px-4 md:px-8 relative overflow-hidden"
    >
      {/* Background effects */}
      <motion.div
        style={{ y: yParallax }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        {/* Section Header */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-4 md:mb-8"
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              {bioContent.title}
            </span>
          </motion.h2>
          
          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "100%" } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto max-w-xs"
          />
        </motion.div>

        {/* Bio Content Grid - Optimized for mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-16 mb-4 md:mb-8">
          {/* Content Sections */}
          <div className="space-y-4 md:space-y-8">
            {[bioContent.background, bioContent.location, bioContent.technical].map((section, index) => (
              <motion.div
                key={section.title}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  className="relative p-4 md:p-8 rounded-2xl backdrop-blur-lg
                    bg-white/40 dark:bg-gray-800/40 
                    border border-white/20 dark:border-gray-700/20
                    shadow-lg hover:shadow-xl transition-all duration-500
                    hover:bg-white/60 dark:hover:bg-gray-800/60"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Background glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Content */}
                  <div className="relative">
                    <motion.h3 
                      className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-800 dark:text-gray-200"
                      whileHover={{ color: "rgb(59, 130, 246)" }}
                      transition={{ duration: 0.3 }}
                    >
                      {section.title}
                    </motion.h3>
                    
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                      {section.description}
                    </p>
                  </div>

                  {/* Simplified hover effects for mobile performance */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block">
                    {Array.from({ length: 3 }, (_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full"
                        initial={{ 
                          x: Math.random() * 200, 
                          y: Math.random() * 100,
                          opacity: 0 
                        }}
                        animate={{
                          y: [Math.random() * 100, -20],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2 + Math.random(),
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Skills Section - Optimized for mobile */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="lg:sticky lg:top-32">
              <motion.h3 
                className="text-xl md:text-2xl font-bold mb-4 md:mb-8 text-center lg:text-left"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  Core Expertise
                </span>
              </motion.h3>
              
              {/* Mobile: 3 columns, Desktop: 2 columns */}
              <div className="grid grid-cols-3 md:grid-cols-2 gap-3 md:gap-4">
                {bioContent.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    variants={skillVariants}
                    custom={index}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <motion.div
                      className="relative p-3 md:p-6 rounded-xl backdrop-blur-lg
                        bg-gradient-to-br from-white/30 to-white/10 
                        dark:from-gray-800/30 dark:to-gray-800/10
                        border border-white/20 dark:border-gray-700/20
                        shadow-md hover:shadow-lg transition-all duration-300
                        text-center cursor-pointer overflow-hidden"
                      whileHover={{ 
                        scale: 1.05, 
                        y: -5,
                        boxShadow: "0 10px 25px rgba(59, 130, 246, 0.15)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Simplified shimmer for mobile performance */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 hidden md:block"
                        initial={{ x: "-100%" }}
                        animate={{ 
                          x: inView ? ["100%", "100%", "-100%"] : "-100%" 
                        }}
                        transition={{ 
                          duration: 2, 
                          delay: index * 0.2 + 1,
                          repeat: Infinity,
                          repeatDelay: 5,
                          ease: "easeInOut" 
                        }}
                      />
                      
                      {/* Content */}
                      <div className="relative">
                        <motion.div
                          className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 
                            flex items-center justify-center border border-blue-500/20 dark:border-blue-400/20"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                        </motion.div>
                        
                        <h4 className="font-semibold text-xs md:text-sm text-gray-800 dark:text-gray-200 
                          group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                          {skill}
                        </h4>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Additional decorative elements */}
              <motion.div
                className="mt-6 md:mt-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full 
                  bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                  border border-blue-500/20 backdrop-blur-sm">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="w-2 h-2 bg-blue-500 rounded-full"
                  />
                  <span className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400">
                    Always learning, always growing
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA - Optimized spacing */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <motion.p 
            className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Passionate about creating innovative solutions that make a meaningful impact on people's lives.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="w-full sm:w-auto px-6 md:px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white 
                rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300
                hover:from-blue-700 hover:to-purple-700 text-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Work
            </motion.a>
            
            <motion.a
              href="#contact"
              className="w-full sm:w-auto px-6 md:px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 
                dark:text-gray-300 rounded-xl font-semibold hover:border-blue-500 
                dark:hover:border-blue-400 transition-all duration-300 backdrop-blur-sm
                bg-white/10 dark:bg-gray-900/10 text-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};