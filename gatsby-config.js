module.exports = {
  siteMetadata: {
    title: `Virtual Class`,
    titleTemplate: `%s . Online Platform`,
    description: `Online Platform`,
    author: `Online Platform`,
    siteUrl: ''
  },
  plugins: [
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: {
        prefixes: [`/login/*`, `/apply-now/*`, '/dashboard/*', '/authorise/*', '/reset-password/*']
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
        name: `Virtual Class`,
        short_name: `Virtual Class`,
        start_url: `/?utm_source=launcher`,
        background_color: `#eae9f4`,
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
    `@bumped-inc/gatsby-plugin-optional-chaining`,
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
    {
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
        features: [`Array.prototype.map`, `fetch`, `default`, `es2015`, `es2017`, `es5`, `es6`, `es7`, `Array.from`, `Array.isArray`,
          `Array.prototype.copyWithin`, `Array.prototype.entries`, `Array.prototype.findIndex`, `Array.prototype.forEach`,
          `Array.prototype.map`, `Array.prototype.reduce`, `Array.prototype.values`, `Blob`, `Date.now`, `JSON`, `Map`, `~viewport`,
          `~html5-elements`]
      }
    }
  ],

}