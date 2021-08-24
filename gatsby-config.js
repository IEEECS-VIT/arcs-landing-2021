module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Arcs 2021",
  },
  plugins: ["gatsby-plugin-postcss"],
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("node-sass"),
      },
    },
  ],
};
