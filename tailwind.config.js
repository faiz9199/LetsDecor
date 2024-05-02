// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        brush: ["Alex Brush", "cursive"],
        cormorant:["Cormorant Garamond", "serif"],
        nunito: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        primary: "#a2783a",
        black: "#000000",
        backgrond: "#fff7ea",
        white: "#ffffff"
      }
    },
  },
  plugins: [],
};
