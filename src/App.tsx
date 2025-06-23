import * as React from 'react';
import { motion } from 'framer-motion';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { Bio } from './components/bio';
import { ProjectsSection } from './components/project-card';
import { EducationSection, WorkSection } from './components/timeline';
import { SEO } from './components/seo';
import { socialLinks } from './data/content';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden">
      <SEO />
      <Header />
      
      <main className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <Hero />

        {/* Bio Section */}
        <Bio />

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full py-20"
        >
          <ProjectsSection />
        </motion.div>

        {/* Experience & Education Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full bg-gray-50 dark:bg-gray-800/50 py-20"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto space-y-20">
              <EducationSection />
              <WorkSection />
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          id="contact"
          className="w-full py-20"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center">
                Connect With Me
              </h2>

              <motion.div 
                className="flex gap-8 justify-center"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
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
                  <motion.a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2 text-gray-600 hover:text-blue-600 
                      dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <link.Component className="w-6 h-6" />
                    <span className="text-xs font-medium opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300">
                      {link.label}
                    </span>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="w-full py-8 text-center text-gray-600 dark:text-gray-400 mt-auto">
          <div className="container mx-auto px-4">
            <p className="text-sm">
              © {new Date().getFullYear()} Kagen Jensen. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
