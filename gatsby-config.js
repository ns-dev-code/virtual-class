module.exports = {
  siteMetadata: {
    title: `Talent Excel`,
    titleTemplate: `%s . Talnet Development and Discovery Platform`,
    description: `Talnet Development and Discovery Platform`,
    author: `Talent Excel`,
    siteUrl: 'https://www.talentexcel.com'
  },
  plugins: [
    {
      resolve:`gatsby-plugin-create-client-paths`,
      options:{
        prefixes:[`/apply-now/*`,'/reset-password/*']
      }
    },
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
        short_name: `Talent Excel`,
        start_url: `/?utm_source=launcher`,
        background_color: `#ffffff`,
        theme_color: `#4ab8b3`,
        display: `standalone`,
        icon: `src/images/talent.png`, // This path is relative to the root of the site.
        scope: "/",
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-theme-material-ui`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-react-redux`,
      options: {
        // [required] - path to your createStore module
        pathToCreateStoreModule: './src/lib/redux/stores',
        // [optional] - options passed to `serialize-javascript`
        // info: https://github.com/yahoo/serialize-javascript#options
        // will be merged with these defaults:
        serialize: {
          space: 0,
          isJSON: true,
          unsafe: false,
        },
      },
    },
  ],
  
}
