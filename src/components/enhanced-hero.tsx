import * as React from 'react';
import { FC, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo, socialLinks } from '../data/content';
import { 
  CommandLineIcon, 
  CodeBracketIcon,
  CpuChipIcon,
  ArrowDownIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import { MagneticButton } from './magnetic-button';

export const EnhancedHero: FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const { scrollY } = useScroll();
  
  // Parallax effects
  const yBackground = useTransform(scrollY, [0, 500], [0, 100]);
  const yContent = useTransform(scrollY, [0, 500], [0, -50]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatingIconsVariants = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section 
      ref={ref}
      className="min-h-screen pt-20 pb-8 px-4 md:px-8 overflow-hidden flex items-center relative gpu-accelerated"
    >
      {/* Animated mesh gradient background */}
      <motion.div
        style={{ y: yBackground }}
        className="absolute inset-0 opacity-30"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 animate-pulse" />
        <div className="absolute inset-0">
          <motion.div
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 40% 80%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
          />
        </div>
      </motion.div>

      {/* Interactive light following cursor */}
      <motion.div
        className="absolute pointer-events-none"
        animate={{
          x: mousePosition.x * 50,
          y: mousePosition.y * 50,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 30 }}
      >
        <div className="w-96 h-96 bg-gradient-radial from-blue-500/10 to-transparent rounded-full blur-3xl" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{ y: yContent }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10"
      >
        {/* Text Content */}
        <motion.div className="space-y-8 text-center lg:text-left relative">
          {/* Floating Tech Icons - Further reduced and repositioned */}
          <motion.div
            variants={floatingIconsVariants}
            animate="animate"
            className="absolute -left-32 top-16 text-blue-500/10 dark:text-blue-400/10 hidden lg:block"
          >
            <CommandLineIcon className="w-6 h-6" />
          </motion.div>
          
          <motion.div
            variants={floatingIconsVariants}
            animate="animate"
            transition={{ delay: 1.5 }}
            className="absolute -right-24 top-32 text-purple-500/10 dark:text-purple-400/10 hidden lg:block"
          >
            <CodeBracketIcon className="w-6 h-6" />
          </motion.div>
          
          <motion.div
            variants={floatingIconsVariants}
            animate="animate"
            transition={{ delay: 3 }}
            className="absolute -left-28 bottom-32 text-cyan-500/10 dark:text-cyan-400/10 hidden lg:block"
          >
            <CpuChipIcon className="w-6 h-6" />
          </motion.div>

          {/* Main Content */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                border border-blue-500/20 backdrop-blur-sm"
            >
              <SparklesIcon className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Available for hire
              </span>
            </motion.div>
            
            <h2 className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium">
              Welcome, I'm
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-relaxed pb-2">
              <motion.span
                className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 
                  bg-clip-text text-transparent bg-300% animate-gradient-x"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {personalInfo.name}
              </motion.span>
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light leading-relaxed"
              variants={itemVariants}
            >
              {personalInfo.title}
            </motion.p>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-2xl"
          >
            {personalInfo.about}
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <MagneticButton className="group" intensity={0.1}>
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white 
                  rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300
                  flex items-center gap-2 gpu-accelerated will-change-transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View My Work</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowDownIcon className="w-4 h-4 rotate-90" />
                </motion.div>
              </motion.button>
            </MagneticButton>
            
            <MagneticButton intensity={0.1}>
              <motion.button
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 
                  dark:text-gray-300 rounded-xl font-semibold hover:border-blue-500 
                  dark:hover:border-blue-400 transition-all duration-300 backdrop-blur-sm
                  bg-white/10 dark:bg-gray-900/10 gpu-accelerated will-change-transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </MagneticButton>
          </motion.div>

          {/* Social Links with Minimal Animation */}
          <motion.div 
            variants={itemVariants}
            className="flex gap-6 justify-center lg:justify-start"
          >
            {socialLinks.map((link, index) => (
              <MagneticButton key={link.platform} intensity={0.05}>
                <motion.a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400
                    transform transition-all duration-300 p-3 rounded-xl
                    hover:bg-blue-50 dark:hover:bg-blue-900/20 backdrop-blur-sm
                    border border-transparent hover:border-blue-200 dark:hover:border-blue-800
                    gpu-accelerated will-change-transform"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -1, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <link.Component className="w-6 h-6" />
                </motion.a>
              </MagneticButton>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Image Section */}
        <motion.div
          variants={imageVariants}
          className="relative group perspective-1000"
        >
          <div className="relative w-80 h-80 mx-auto lg:w-[30rem] lg:h-[30rem]">
            {/* Multiple layered background effects */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl"
              animate={{
                rotate: [8, 15, 8],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-3xl"
              animate={{
                rotate: [-5, 5, -5],
                scale: [1.02, 1, 1.02],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />

            {/* Main image */}
            <motion.img
              src={personalInfo.headshot}
              alt={personalInfo.name}
              className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl"
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                rotateX: 5,
              }}
              transition={{ duration: 0.4 }}
            />

          {/* Floating particles around image */}
          {Array.from({ length: 8 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full"
              style={{
                top: `${20 + (i * 60) % 80}%`,
                left: `${10 + (i * 70) % 90}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}

          {/* Extra Images Gallery */}
          {personalInfo.extraImages && (
            <div className="absolute -bottom-6 -right-6 flex gap-2">
              {personalInfo.extraImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2 + index * 0.3, duration: 0.6 }}
                >
                  <motion.img
                    src={image}
                    alt={`${personalInfo.name} - Photo ${index + 2}`}
                    className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-xl shadow-lg 
                      border-2 border-white/50 dark:border-gray-700/50 optimized-image"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: index % 2 === 0 ? 5 : -5,
                      zIndex: 10
                    }}
                    transition={{ duration: 0.3 }}
                    loading="lazy"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-xl 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>
              ))}
            </div>
          )}
          </div>

          {/* Enhanced ambient glow effects */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.1, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -z-10 top-1/2 left-1/2 w-96 h-96
              bg-blue-500/20 dark:bg-blue-500/30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
          />
          
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute -z-10 top-1/2 left-1/2 w-80 h-80
              bg-purple-500/20 dark:bg-purple-500/30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 translate-x-8"
          />
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        variants={itemVariants}
        className="hidden lg:flex items-center gap-2 text-gray-400 dark:text-gray-500 text-sm
          absolute bottom-8 left-1/2 -translate-x-1/2 hover:text-gray-600 dark:hover:text-gray-300
          transition-colors duration-300 cursor-pointer group"
        whileHover={{ y: -2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDownIcon className="w-5 h-5 group-hover:text-blue-500 transition-colors" />
        </motion.div>
        <span className="group-hover:text-blue-500 transition-colors">Scroll to explore</span>
      </motion.div>
    </section>
  );
};