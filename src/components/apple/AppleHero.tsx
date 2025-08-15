import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import { personalInfo, socialLinks } from '@/data/content';
import { ArrowDownIcon, SparklesIcon } from '@heroicons/react/24/outline';

export function AppleHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollY } = useScroll();
  
  // Parallax effects with Apple-style subtlety
  const yContent = useTransform(scrollY, [0, 500], [0, -50]);
  const yImage = useTransform(scrollY, [0, 500], [0, -100]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.98]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  return (
    <section 
      ref={ref}
      className="min-h-screen pt-32 pb-16 px-4 flex items-center relative overflow-hidden"
    >
      <motion.div
        style={{ y: yContent, scale }}
        className="mx-auto max-w-7xl w-full"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Content */}
          <motion.div className="space-y-8 text-center lg:text-left">
            {/* Status badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-sm"
            >
              <SparklesIcon className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 font-sf-pro">
                Available for opportunities
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-xl text-gray-600 dark:text-gray-400 font-sf-pro">
                Hello, I'm
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold font-sf-pro-display leading-tight">
                <motion.span
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {personalInfo.name}
                </motion.span>
              </h1>
            </motion.div>

            {/* Title */}
            <motion.h2 
              variants={itemVariants}
              className="text-2xl lg:text-3xl text-gray-800 dark:text-gray-200 font-light font-sf-pro-display leading-relaxed"
            >
              {personalInfo.title}
            </motion.h2>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl font-sf-pro"
            >
              {personalInfo.about}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl
                  font-semibold font-sf-pro shadow-lg apple-transition hover:shadow-xl
                  hover:from-blue-700 hover:to-purple-700"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="flex items-center gap-2">
                  View My Work
                  <ArrowDownIcon className="w-4 h-4 rotate-90" />
                </span>
              </motion.button>
              
              <motion.button
                className="px-8 py-4 glass-md rounded-2xl font-semibold font-sf-pro apple-transition
                  text-gray-700 dark:text-gray-300 hover:bg-white/40 dark:hover:bg-white/20"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              variants={itemVariants}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-sm rounded-xl apple-transition hover:bg-white/40 dark:hover:bg-white/20
                    text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <link.Component className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            style={{ y: yImage }}
            variants={itemVariants}
            className="relative lg:order-last"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
              {/* Background effects */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Main image */}
              <motion.img
                src={personalInfo.headshot}
                alt={personalInfo.name}
                className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                loading="eager"
              />

              {/* Floating additional images */}
              {personalInfo.extraImages && (
                <div className="absolute -top-6 -left-6 flex flex-col gap-3">
                  {personalInfo.extraImages.slice(0, 2).map((image, index) => (
                    <motion.img
                      key={index}
                      src={image}
                      alt={`${personalInfo.name} - Photo ${index + 2}`}
                      className="w-20 h-20 object-cover rounded-2xl shadow-xl glass-sm"
                      whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 5 : -5 }}
                      initial={{ opacity: 0, scale: 0.5, x: -20 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      transition={{ delay: 1.2 + index * 0.2, duration: 0.6 }}
                      loading="lazy"
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 dark:text-gray-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          whileHover={{ y: -2 }}
        >
          <span className="text-sm font-sf-pro mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDownIcon className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}