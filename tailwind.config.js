module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: (theme) => ({
      ...theme("colors"),
      nav: "#FDA445",
      "nav-hover": "#FFC587",
      button: "#F9AE5E",
    }),
    textColor: (theme) => theme("colors"),
    textColor: {
      orange: "#FFA53b",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
