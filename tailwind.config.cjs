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
      }
    },
  },
  plugins: [],
}
