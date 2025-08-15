import { motion } from 'framer-motion';
import { personalInfo, socialLinks } from '@/data/content';

export function AppleFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-4 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-100/50 to-transparent dark:from-gray-800/50 dark:to-transparent" />
      
      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo/Name */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl 
                flex items-center justify-center shadow-lg"
              whileHover={{ rotate: 5 }}
            >
              <span className="text-white font-bold text-lg">
                {personalInfo.name.split(' ').map(n => n[0]).join('')}
              </span>
            </motion.div>
            <span className="text-2xl font-bold font-sf-pro-display text-gray-900 dark:text-white">
              {personalInfo.name}
            </span>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass-sm rounded-2xl apple-transition
                  hover:bg-white/40 dark:hover:bg-white/20 text-gray-600 dark:text-gray-400
                  hover:text-blue-600 dark:hover:text-blue-400"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
              >
                <link.Component className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />

          {/* Copyright and credits */}
          <motion.div
            className="space-y-2 text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <p className="font-sf-pro">
              © {currentYear} {personalInfo.name}. Crafted with passion and precision.
            </p>
            <p className="text-sm font-sf-pro">
              Built with React, TypeScript, Tailwind CSS, and Framer Motion
            </p>
          </motion.div>

          {/* Subtle Apple-style detail */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <div className="w-1 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}