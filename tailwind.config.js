/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './apps/**/*.{js,jsx,ts,tsx}',
    './packages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          cyber: '#00FF9F',
        },
        obsidian: {
          deep: '#0B0E14',
          glass: 'rgba(11, 14, 20, 0.8)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}