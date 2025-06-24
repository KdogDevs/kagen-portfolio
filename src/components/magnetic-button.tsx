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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Very minimal movement for social buttons to avoid glitches
    const deltaX = Math.max(-8, Math.min(8, (e.clientX - centerX) * intensity));
    const deltaY = Math.max(-8, Math.min(8, (e.clientY - centerY) * intensity));

    setMousePosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const buttonContent = (
    <motion.div
      ref={buttonRef}
      className={cn(
        "relative inline-block cursor-pointer magnetic-button gpu-accelerated",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 30,
        mass: 0.8,
        restSpeed: 0.01,
        restDelta: 0.01,
      }}
      style={{
        willChange: 'transform',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Simplified content without glitch-causing effects */}
      <div className="relative z-10 will-change-auto">
        {children}
      </div>
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