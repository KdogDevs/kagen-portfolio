/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sf-pro': ['"SF Pro Text"', '-apple-system', 'BlinkMacSystemFont', '"Helvetica Neue"', 'sans-serif'],
        'sf-pro-display': ['"SF Pro Display"', '-apple-system', 'BlinkMacSystemFont', '"Helvetica Neue"', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#FFFFFF',
          dark: '#000000',
        },
        secondary: {
          light: '#000000',
          dark: '#FFFFFF',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.8)',
          dark: 'rgba(255, 255, 255, 0.1)',
        }
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-up': 'slide-up 0.8s ease-out forwards',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'float': {
          '0%, 100%': { 
            transform: 'translate3d(0, 0px, 0)',
            'will-change': 'transform'
          },
          '50%': { 
            transform: 'translate3d(0, -20px, 0)',
            'will-change': 'transform'
          },
        },
        'glow': {
          'from': { 
            'box-shadow': '0 0 20px #3b82f6',
            'will-change': 'box-shadow'
          },
          'to': { 
            'box-shadow': '0 0 30px #8b5cf6, 0 0 40px #06b6d4',
            'will-change': 'box-shadow'
          },
        },
        'shimmer': {
          '0%': { 
            transform: 'translate3d(-100%, 0, 0)',
            'will-change': 'transform'
          },
          '100%': { 
            transform: 'translate3d(100%, 0, 0)',
            'will-change': 'transform'
          },
        },
        'fade-in': {
          '0%': { 
            opacity: '0',
            transform: 'translate3d(0, 10px, 0)',
            'will-change': 'opacity, transform'
          },
          '100%': { 
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
            'will-change': 'auto'
          },
        },
        'slide-up': {
          '0%': { 
            opacity: '0',
            transform: 'translate3d(0, 30px, 0)',
            'will-change': 'opacity, transform'
          },
          '100%': { 
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
            'will-change': 'auto'
          },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
      perspective: {
        '1000': '1000px',
      },
      },
      backdropBlur: {
        'xs': '2px',
        'glass': '20px',
      },
      backdropSaturate: {
        '120': '1.2',
        '150': '1.5',
        '180': '1.8',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        // Glass morphism utilities
        '.glass-sm': {
          'backdrop-filter': 'blur(8px) saturate(150%)',
          'background-color': 'rgba(255, 255, 255, 0.1)',
          'border': '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.glass-md': {
          'backdrop-filter': 'blur(16px) saturate(150%)',
          'background-color': 'rgba(255, 255, 255, 0.15)',
          'border': '1px solid rgba(255, 255, 255, 0.25)',
        },
        '.glass-lg': {
          'backdrop-filter': 'blur(24px) saturate(150%)',
          'background-color': 'rgba(255, 255, 255, 0.2)',
          'border': '1px solid rgba(255, 255, 255, 0.3)',
        },
        '.glass-xl': {
          'backdrop-filter': 'blur(32px) saturate(150%)',
          'background-color': 'rgba(255, 255, 255, 0.25)',
          'border': '1px solid rgba(255, 255, 255, 0.35)',
        },
        // Dark mode glass variants
        '.dark .glass-sm': {
          'background-color': 'rgba(255, 255, 255, 0.08)',
          'border': '1px solid rgba(255, 255, 255, 0.15)',
        },
        '.dark .glass-md': {
          'background-color': 'rgba(255, 255, 255, 0.12)',
          'border': '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.dark .glass-lg': {
          'background-color': 'rgba(255, 255, 255, 0.16)',
          'border': '1px solid rgba(255, 255, 255, 0.25)',
        },
        '.dark .glass-xl': {
          'background-color': 'rgba(255, 255, 255, 0.2)',
          'border': '1px solid rgba(255, 255, 255, 0.3)',
        },
        // Apple-style transitions
        '.apple-transition': {
          'transition': 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        },
        '.apple-transition-fast': {
          'transition': 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        },
        '.apple-transition-slow': {
          'transition': 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        },
        // Performance optimizations
        '.gpu-accelerated': {
          'transform': 'translateZ(0)',
          'will-change': 'transform',
        },
        '.contain-layout': {
          'contain': 'layout style paint',
        },
      };
      addUtilities(newUtilities);
    }
  ],
}
