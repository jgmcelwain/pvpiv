const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,jsx}',
  ],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      ...defaultTheme.colors,
      orange: colors.orange,
      yellow: colors.yellow,
    },
    fontFamily: {
      ...defaultTheme.fontFamily,
      title: ['Poppins', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      padding: ['first', 'last'],
      margin: ['last'],
    },
  },
  plugins: [require('@tailwindcss/custom-forms')],
};
