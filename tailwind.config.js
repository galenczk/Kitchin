/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        olive: "#393424",
        mint: "#A6EBC9",
        salmon: "#f9af8b",
        cyberYellow: "#fbd00e",
      },
      backgroundImage: {
        "0": "url('./images/0.avif')",
        "1": "url('./images/1.avif')",
        "2": "url('./images/2.avif')",
        "3": "url('./images/3.avif')",
        "4": "url('./images/4.avif')",
        "5": "url('./images/5.avif')",
        "6": "url('./images/6.avif')",
        "7": "url('./images/7.avif')",
        "8": "url('./images/8.avif')",
        "9": "url('./images/9.avif')"
      },
    },
  },
  plugins: [],
};
