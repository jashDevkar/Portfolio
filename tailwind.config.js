/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Pacifico:["Pacifico", "cursive"],
        Roboto:["Roboto Serif", "serif"],
        Poppins:["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}

