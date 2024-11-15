/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zilla: ["Zilla Slab", "serif"],
        spectral: ["Spectral", "serif"],
      },
    },
  },
  plugins: [require("@catppuccin/tailwindcss")],
};
