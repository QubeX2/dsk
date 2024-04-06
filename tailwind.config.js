const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "Sans", "sans-serif"],
    },
    extend: {
      colors: {
        ...colors,
      },
    },
  },
  plugins: [],
};
