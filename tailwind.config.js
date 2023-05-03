/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        railway: ['railway', 'sans-serif'],
      },
      colors: {
        gold: '#FF9A00',
      },
    },
  },
  plugins: [],
};
