require("dotenv").config();
module.exports = {
  siteMetadata: {
    title: `Nombalier Adrien | Fullstack developer`,
    description: `Développeur web junior fullstack à Tours (37)`,
    author: `@Adri1`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `photo`,
        path: `${__dirname}/src/assets/photo`,
      },
    },
    {
      resolve: "gatsby-background-image",
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: "/:",
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "Project",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "projects",
        // Url to query from
        url: `${process.env.GATSBY_API_URL}/graphql`,
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
