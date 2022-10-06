/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        russo: ["Russo One", "sans-serif"],
        work: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};