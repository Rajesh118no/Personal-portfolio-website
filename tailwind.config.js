/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#09090b',
          gray: '#27272a',
          accent: '#8b5cf6', // Violet
          glow: '#a78bfa',
        }
      }
    },
  },
  plugins: [],
}