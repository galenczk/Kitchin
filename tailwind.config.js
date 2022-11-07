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
        "0": "url('/images/0.avif')"
      }
    },
  },
  plugins: [],
};
