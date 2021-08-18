const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'xs': '300px',
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {
      scale:['group-hover'],
      translate:['group-hover'],
    },
  },
  plugins: [],
}
