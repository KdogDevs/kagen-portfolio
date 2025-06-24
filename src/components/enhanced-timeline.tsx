import { FC } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { education, employment } from '../data/content';
import { Education, Employment } from '../types';

interface EnhancedTimelineItemProps {
  item: Education | Employment;
  index: number;
  isLeft: boolean;
}

const EnhancedTimelineItem: FC<EnhancedTimelineItemProps> = ({ item, index, isLeft }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: isLeft ? -50 : 50,
      y: 30 
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.2,
      },
    },
  };

  const isEducation = 'school' in item;
  const title = isEducation ? (item as Education).school : (item as Employment).company;
  const subtitle = isEducation ? (item as Education).degree : (item as Employment).position;
  const details = isEducation ? (item as Education).achievements : (item as Employment).responsibilities;

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} items-center mb-16 group`}
    >
      {/* Content Card */}
      <motion.div
        className="w-5/12 relative"
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="relative p-8 rounded-2xl backdrop-blur-lg
          bg-white/60 dark:bg-gray-800/60 
          border border-white/20 dark:border-gray-700/20
          shadow-lg hover:shadow-xl transition-all duration-500
          hover:bg-white/80 dark:hover:bg-gray-800/80">
          
          {/* Background glow effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.5 }}
          />
          
          {/* Logo placeholder */}
          {isEducation && (item as Education).logo && (
            <motion.div
              className="absolute -top-4 -right-4 w-12 h-12 bg-white dark:bg-gray-800 
                rounded-xl shadow-lg border border-gray-200 dark:border-gray-700
                flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg" />
            </motion.div>
          )}
          
          {/* Content */}
          <div className="relative">
            <motion.div
              className="flex items-center justify-between mb-2"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
            >
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 
                px-3 py-1 rounded-full bg-blue-100/50 dark:bg-blue-900/30">
                {item.years}
              </span>
            </motion.div>
            
            <motion.h3 
              className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200
                group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: index * 0.2 + 0.4, duration: 0.6 }}
            >
              {title}
            </motion.h3>
            
            <motion.p 
              className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
            >
              {subtitle}
            </motion.p>
            
            {details && (
              <motion.ul 
                className="space-y-2"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.2 + 0.6, duration: 0.6 }}
              >
                {details.map((detail, detailIndex) => (
                  <motion.li
                    key={detailIndex}
                    className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ 
                      delay: index * 0.2 + 0.7 + detailIndex * 0.1, 
                      duration: 0.5 
                    }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    />
                    <span className="leading-relaxed">{detail}</span>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </div>

          {/* Floating particles on hover */}
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {Array.from({ length: 3 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full"
                initial={{ 
                  x: Math.random() * 300, 
                  y: Math.random() * 200,
                  opacity: 0 
                }}
                animate={{
                  y: [Math.random() * 200, -20],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2 + Math.random(),
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Timeline Center */}
      <div className="w-2/12 flex justify-center relative">
        <div className="absolute w-px h-full bg-gradient-to-b from-blue-500/30 via-purple-500/50 to-blue-500/30" />
        <motion.div
          className="relative w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full 
            shadow-lg border-4 border-white dark:border-gray-900 z-10"
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ 
            delay: index * 0.2 + 0.2, 
            duration: 0.6,
            type: "spring",
            stiffness: 400 
          }}
          whileHover={{ scale: 1.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>

      {/* Spacer */}
      <div className="w-5/12" />
    </motion.div>
  );
};

interface EnhancedSectionProps {
  title: string;
  items: (Education | Employment)[];
  icon: string;
}

const EnhancedSection: FC<EnhancedSectionProps> = ({ title, items, icon }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div 
      ref={ref}
      className="relative"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full
            bg-gradient-to-r from-blue-500/10 to-purple-500/10 
            border border-blue-500/20 backdrop-blur-sm"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="text-2xl">{icon}</span>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
        </motion.div>
      </motion.div>

      {/* Timeline Items */}
      <div className="relative max-w-6xl mx-auto">
        {items.map((item, index) => (
          <EnhancedTimelineItem
            key={index}
            item={item}
            index={index}
            isLeft={index % 2 === 0}
          />
        ))}
      </div>
    </motion.div>
  );
};

export const EnhancedEducationSection: FC = () => {
  return <EnhancedSection title="Education" items={education} icon="🎓" />;
};

export const EnhancedWorkSection: FC = () => {
  return <EnhancedSection title="Experience" items={employment} icon="💼" />;
};