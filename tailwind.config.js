const colors = require('tailwindcss/colors'); //eslint-disable-line

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: {
      dark: '#3E4E88',
      gray: colors.gray,
      purple: '#7971EA',
    },
    stroke: {
      dark: '#3E4E88',
    },
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
      black: colors.black,
    },
    extend: {
      boxShadow: {
        'top-lg': '0 -2px 6px -1px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
