/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FFFFFF',
          dark: '#000000',
        },
        secondary: {
          light: '#000000',
          dark: '#FFFFFF',
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
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}
