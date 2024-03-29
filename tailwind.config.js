const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin:{
        '68': '17rem',
      }
    },
    screens: {
      iphone5: { max: "320px" },
      ...defaultTheme.screens,
      "max-md": { max: "767px" },
      "max-sm": { max: "640px" },
      "max-xs": { max: "500px" },
    },
    zIndex: {
      '-1': '-1',
     },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      nav: "#FDA445",
      "nav-hover": "#FFC587",
      orange: "#F9AE5E",
      "light-orange": "#F8E2CF",
      pink: "#EF8D98",
    }),
    textColor: (theme) => theme("colors"),
    textColor: {
      orange: "#FFA53b",
      gray: "#8E8E8E",
    },
    fontFamily: {
      mont: ["Montserrat, san-serif"],
      screens: {
        iphone6: "360px",
        xs: "300px",
        ...defaultTheme.screens,
      },
    },
    variants: {
      extend: {
        scale: ["group-hover"],
        translate: ["group-hover"],
      },
    },
    plugins: [],
  },
};
