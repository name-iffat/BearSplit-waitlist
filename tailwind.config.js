/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#FFF9F0',
        'bear-brown': '#8B5E3C',
        'bear-light': '#D4A373',
        'bear-dark': '#5D4037',
        'pastel-green': '#D0F0C0',
        'pastel-pink': '#FFD1DC',
        'pastel-blue': '#AEC6CF',
        'pastel-yellow': '#FDFD96',
      },
      fontFamily: {
        'hand': ['"Patrick Hand"', 'cursive'],
        'sans': ['"Patrick Hand"', 'cursive'], // Default to hand font for this app
      },
      boxShadow: {
        'soft': '4px 4px 0px 0px rgba(93, 64, 55, 0.1)',
        'hard': '3px 3px 0px 0px #5D4037',
      },
      borderRadius: {
        'hand': '255px 15px 225px 15px / 15px 225px 15px 255px',
      }
    },
  },
  plugins: [],
}
