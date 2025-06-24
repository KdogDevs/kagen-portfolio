import { FC, useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
}

export const MagneticButton: FC<MagneticButtonProps> = ({
  children,
  className = "",
  intensity = 0.3,
  onClick,
  href,
  target,
  rel,
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * intensity;
    const deltaY = (e.clientY - centerY) * intensity;

    setMousePosition({ x: deltaX, y: deltaY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const buttonContent = (
    <motion.div
      ref={buttonRef}
      className={cn(
        "relative inline-block cursor-pointer group",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
      }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 blur-xl"
        animate={{
          opacity: isHovered ? 0.3 : 0,
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Button content */}
      <motion.div
        className="relative z-10"
        animate={{
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
      
      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-blue-500/30"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? [1, 1.5] : 0,
          opacity: isHovered ? [0.5, 0] : 0,
        }}
        transition={{
          duration: 1,
          repeat: isHovered ? Infinity : 0,
          ease: "easeOut",
        }}
      />
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className="inline-block">
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
};