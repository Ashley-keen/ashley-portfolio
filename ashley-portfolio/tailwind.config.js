/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        'apricot': '#F9DBBD',
        'candy': '#FFA5AB',
        'rose': '#DA627D',
        'berry': '#A53860',
        'maroon': '#450920',
      }
    },
  },
  plugins: [],
}

