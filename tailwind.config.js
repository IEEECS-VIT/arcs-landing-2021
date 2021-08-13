module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: (theme) => ({
      ...theme("colors"),
      nav: "#FDA445",
      "nav-hover": "#FFC587",
      orange: "#F9AE5E",
      "light-orange": "#F8E2CF",
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
