const colors = require('tailwindcss/colors'); //eslint-disable-line

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Open\\ Sans'],
    },
    colors: {
      blue: {
        dark: '#1A2C5B',
        DEFAULT: '#3E4E88',
        ligth: '#B8DFF0',
        clear: '#EDF7FB',
      },
      purple: {
        light: '#7971EA',
        hover: '#8b83fa',
      },
      gray: colors.gray,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
