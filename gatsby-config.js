module.exports = {
  siteMetadata: {
    title: "Prashant Joshi | Blog",
    description: "This is about me",
    author: `@joshiprashanthd`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-postcss",
  ],
};
