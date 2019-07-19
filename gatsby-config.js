module.exports = {
  siteMetadata: {
    title: `Talent Excel`,
    description: `Connecting Organisation with Client`,
    author: `Talent Excel`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Talent Excel`,
        short_name: `Connecting Organisation with talent`,
        start_url: `/?utm_source=launcher`,
        background_color: `#eae9f4`,
        theme_color: `#4ab8b3`,
        display: `standalone`,
        icon: `src/images/talent.png`, // This path is relative to the root of the site.
        scope: "/",
      },
    },
    `gatsby-theme-material-ui`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`
  ],
}
