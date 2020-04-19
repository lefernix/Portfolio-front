require("dotenv").config({
  path: `.env.${process.env.GATSBY_API_URL}`,
})

module.exports = {
  siteMetadata: {
    title: `Nombalier Adrien | Fullstack developer`,
    description: `Développeur web junior fullstack à Tours (37)`,
    author: `@Adri1`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
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
        url: "http://localhost:8001/graphql",
      },
      },
      /*
      * Gatsby's data processing layer begins with “source” plugins. Here we
      * setup the site to pull data from the "documents" collection in a local
      * MongoDB instance
      */
      {
        resolve: `gatsby-source-mongodb`,
        options: { connectionString: `mongodb://localhost/portfolio`,dbName: `portfolio`, collection: `projects` },
      },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
