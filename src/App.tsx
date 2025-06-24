import * as React from 'react';
import { motion } from 'framer-motion';
import { EnhancedHeader } from './components/enhanced-header';
import { EnhancedHero } from './components/enhanced-hero';
import { EnhancedBio } from './components/enhanced-bio';
import { EnhancedProjectsSection } from './components/enhanced-projects-section';
import { EnhancedEducationSection, EnhancedWorkSection } from './components/enhanced-timeline';
import { SEO } from './components/seo';
import { ParticleBackground } from './components/particle-background';
import { FloatingOrbs } from './components/floating-orbs';
import { CustomCursor } from './components/custom-cursor';
import { MagneticButton } from './components/magnetic-button';
import { socialLinks } from './data/content';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden relative">
      <SEO />
      
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Background Effects */}
      <ParticleBackground />
      <FloatingOrbs count={15} />
      
      <EnhancedHeader />
      
      <main className="flex flex-col min-h-screen relative z-10">
        {/* Enhanced Hero Section */}
        <EnhancedHero />

        {/* Bio Section with Enhanced Styling */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Gradient separator */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
          
          <div className="relative bg-gradient-to-b from-gray-50/50 to-white/50 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm">
            <EnhancedBio />
            
            {/* Floating elements for visual interest */}
            <motion.div
              className="absolute top-20 right-10 w-20 h-20 bg-blue-500/5 rounded-full blur-xl"
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        {/* Enhanced Projects Section */}
        <EnhancedProjectsSection />

        {/* Experience & Education Sections with Enhanced Styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full relative"
        >
          {/* Background with subtle pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)',
              backgroundSize: '20px 20px'
            }} />
          </div>
          
          <div className="relative py-32">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto space-y-32">
                <EnhancedEducationSection />
                <EnhancedWorkSection />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          id="contact"
          className="w-full py-32 relative overflow-hidden"
        >
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-cyan-50/50 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-cyan-900/10" />
          
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                    Let's Connect
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
                  Ready to bring your next project to life? Let's collaborate and create something extraordinary together.
                </p>
              </motion.div>

              <motion.div 
                className="flex flex-wrap gap-8 justify-center"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {socialLinks.map((link) => (
                  <motion.div
                    key={link.platform}
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0.9 },
                      visible: { opacity: 1, y: 0, scale: 1 }
                    }}
                  >
                    <MagneticButton
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="group flex flex-col items-center gap-4 p-8 rounded-2xl
                        bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg
                        border border-white/20 dark:border-gray-700/20
                        shadow-lg hover:shadow-xl transition-all duration-300
                        hover:bg-white/80 dark:hover:bg-gray-800/80">
                        
                        <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10
                          group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300">
                          <link.Component className="w-8 h-8 text-gray-600 dark:text-gray-400 
                            group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
                        </div>
                        
                        <div className="text-center">
                          <h3 className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 
                            dark:group-hover:text-blue-400 transition-colors duration-300">
                            {link.label}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <MagneticButton>
                  <button className="px-12 py-6 text-lg font-semibold text-white
                    bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl
                    shadow-lg hover:shadow-xl transition-all duration-300
                    hover:from-blue-700 hover:to-purple-700">
                    Start a Conversation
                  </button>
                </MagneticButton>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Enhanced Footer */}
        <footer className="w-full py-12 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-100 to-transparent dark:from-gray-800 dark:to-transparent" />
          <div className="container mx-auto px-4 relative">
            <div className="text-center">
              <motion.p 
                className="text-gray-600 dark:text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
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
