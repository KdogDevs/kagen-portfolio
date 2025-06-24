import { FC } from "react";

interface ParticleBackgroundProps {
  className?: string;
}

export const ParticleBackground: FC<ParticleBackgroundProps> = ({ className = "" }) => {
  return (
    <div className={`fixed inset-0 -z-10 ${className}`}>
      {/* CSS-only animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs with CSS animation */}
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-sm animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
        
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-cyan-50/30 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-cyan-900/10" />
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 opacity-30">
          <div 
            className="w-full h-full bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10"
            style={{
              background: `
                radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)
              `,
              animation: 'gradient-x 10s ease infinite',
            }}
          />
        </div>
      </div>
    </div>
  );
};