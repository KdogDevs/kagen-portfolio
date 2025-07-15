import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EnhancedHeader } from './components/enhanced-header';
import { EnhancedHero } from './components/enhanced-hero';
import { EnhancedBio } from './components/enhanced-bio';
import { EnhancedProjectsSection } from './components/enhanced-projects-section';
import { EnhancedEducationSection, EnhancedWorkSection } from './components/enhanced-timeline';
import { SEO } from './components/seo';
import { ParticleBackground } from './components/particle-background';
import { FloatingOrbs } from './components/floating-orbs';

import { MagneticButton } from './components/magnetic-button';
import { socialLinks } from './data/content';
import { perfUtils } from './utils/performance';

// Optimized motion configurations
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

function App() {
  const shouldReduceMotion = useReducedMotion();
  const isLowPowerDevice = perfUtils.isLowPowerDevice();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden relative smooth-scroll mobile-performance">
      <SEO />
      
      {/* Background Effects - Reduced on low-power devices */}
      <ParticleBackground />
      <FloatingOrbs count={isLowPowerDevice ? 3 : shouldReduceMotion ? 5 : 12} />
      
      <EnhancedHeader />
      
      <main className="flex flex-col min-h-screen relative z-10 container-optimized">
        {/* Enhanced Hero Section */}
        <EnhancedHero />

        {/* Bio Section with Enhanced Styling */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="relative will-change-transform"
        >
          {/* Gradient separator */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
          
          <div className="relative bg-gradient-to-b from-gray-50/50 to-white/50 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm">
            <EnhancedBio />
            
            {/* Simplified floating element */}
            {!shouldReduceMotion && !isLowPowerDevice && (
              <motion.div
                className="absolute top-12 md:top-20 right-6 md:right-10 w-16 h-16 md:w-20 md:h-20 bg-blue-500/5 rounded-full blur-xl gpu-accelerated"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
          </div>
        </motion.div>

        {/* Enhanced Projects Section */}
        <EnhancedProjectsSection />

        {/* Experience & Education Sections */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="w-full relative will-change-transform"
        >
          {/* Optimized background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)',
              backgroundSize: '24px 24px'
            }} />
          </div>
          
          <div className="relative mobile-optimized-spacing">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto mobile-optimized-gap flex flex-col">
                <EnhancedEducationSection />
                <EnhancedWorkSection />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Contact Section */}
        <motion.section
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          id="contact"
          className="w-full mobile-optimized-spacing relative overflow-hidden will-change-transform"
        >
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-cyan-50/50 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-cyan-900/10" />
          
          {!shouldReduceMotion && !isLowPowerDevice && (
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/8 rounded-full blur-3xl gpu-accelerated"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.08, 0.2],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12">
              <motion.div
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                    Let's Connect
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
                  Ready to bring your next project to life? Let's collaborate and create something extraordinary together.
                </p>
              </motion.div>

              <motion.div 
                className="flex flex-wrap gap-4 md:gap-8 justify-center"
                variants={staggerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {socialLinks.map((link) => (
                  <motion.div
                    key={link.platform}
                    variants={fadeInVariants}
                    className="will-change-transform"
                  >
                    <MagneticButton
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="group flex flex-col items-center gap-3 md:gap-4 p-6 md:p-8 rounded-2xl
                        bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg
                        border border-white/20 dark:border-gray-700/20
                        shadow-lg hover:shadow-xl transition-all duration-300
                        hover:bg-white/80 dark:hover:bg-gray-800/80 magnetic-button">
                        
                        <div className="p-3 md:p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10
                          group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300">
                          <link.Component className="w-6 h-6 md:w-8 md:h-8 text-gray-600 dark:text-gray-400 
                            group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
                        </div>
                        
                        <div className="text-center">
                          <h3 className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 
                            dark:group-hover:text-blue-400 transition-colors duration-300">
                            {link.label}
                          </h3>
                          <p className="text-xs md:text-sm text-gray-500 dark:text-gray-500 mt-1">
                            {link.platform === 'email' ? 'Send me an email' : 'Follow my work'}
                          </p>
                        </div>
                      </div>
                    </MagneticButton>
                  </motion.div>
                ))}
              </motion.div>

              {/* Call to action */}
              <motion.div
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="will-change-transform"
              >
                <MagneticButton>
                  <button className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 text-base md:text-lg font-semibold text-white
                    bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl
                    shadow-lg hover:shadow-xl transition-all duration-300
                    hover:from-blue-700 hover:to-purple-700 magnetic-button">
                    Start a Conversation
                  </button>
                </MagneticButton>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Enhanced Footer */}
        <footer className="w-full py-8 md:py-12 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-100 to-transparent dark:from-gray-800 dark:to-transparent" />
          <div className="container mx-auto px-4 relative">
            <div className="text-center">
              <motion.p 
                className="text-sm md:text-base text-gray-600 dark:text-gray-400"
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                © {new Date().getFullYear()} Kagen Jensen. Crafted with passion and precision.
              </motion.p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
