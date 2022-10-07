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
      colors: {
        "track-stack-light": "#FFFFFF",
        "track-stack-dark": "#29232A",
        "track-stack-sm-text-dark": "#ECECEC",
        "gradient-start": "#D53DD8",
        "gradient-mid": "#D83D3D",
        "gradient-end": "#D8A33D",
      },
    },
  },
  plugins: [],
};
