module.exports = {
  siteMetadata: {
    title: "Prashant Joshi | Blog",
    description: "This is about me",
    author: `@joshiprashanthd`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    "gatsby-plugin-postcss",
  ],
};
