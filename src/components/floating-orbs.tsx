import { FC, useMemo } from "react";
import { motion } from "framer-motion";
import { generateStars } from "../lib/utils";

interface FloatingOrbsProps {
  count?: number;
  className?: string;
}

export const FloatingOrbs: FC<FloatingOrbsProps> = ({ count = 20, className = "" }) => {
  const orbs = useMemo(() => generateStars(count), [count]);

  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none -z-10 ${className}`}>
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full blur-sm"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: `${orb.size * 20}px`, // Reduced from 40px to 20px
            height: `${orb.size * 20}px`, // Reduced from 40px to 20px
            background: `radial-gradient(circle, rgba(59, 130, 246, ${orb.opacity * 0.5}) 0%, rgba(139, 92, 246, ${orb.opacity * 0.4}) 50%, rgba(6, 182, 212, ${orb.opacity * 0.3}) 100%)`, // Reduced opacity
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            scale: [1, 1.2, 1],
            opacity: [orb.opacity * 0.5, orb.opacity * 0.15, orb.opacity * 0.5], // Reduced opacity range
          }}
          transition={{
            duration: 15 + orb.id * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.animationDelay,
          }}
        />
      ))}
      
      {/* Additional gradient orbs for depth - reduced size and opacity */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full" // Reduced from w-96 h-96
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)", // Reduced opacity from 0.1
          filter: "blur(40px)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.05, 0.15], // Reduced opacity range
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-3/4 right-1/4 w-48 h-48 rounded-full" // Reduced from w-80 h-80
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)", // Reduced opacity from 0.15
          filter: "blur(30px)",
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1], // Reduced opacity range
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />
    </div>
  );
};