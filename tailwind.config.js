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
        default: '#3E4E88',
        ligth: '#B8DFF0',
      },
      purple: {
        light: '#7971EA',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
