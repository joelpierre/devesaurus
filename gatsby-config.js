/* eslint-disable max-len */
require('dotenv').config({
  path: `env/${process.env.NODE_ENV}.env`,
});

const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Devesaurus`,
    description: `A place to get simplified definitions for complicated dev related words`,
    author: `@devesaurus`,
    siteUrl: process.env.GATSBY_SITE_URL,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-page-transitions',
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#047211`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devesaurus-theme`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/images/favicon.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('sass'),
        cssLoaderOptions: {
          camelCase: false,
        },
        options: {
          precision: 8,
        },
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`postcss-preset-env`)({ stage: 0 }),
          require(`postcss-safe-parser`),
          require(`postcss-calc`),
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        components: path.join(__dirname, 'src/components'),
        sass: path.join(__dirname, 'src/sass'),
        icons: path.join(__dirname, 'src/icons'),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**', '/do-not-track/me/too/'],
        // Enables Google Optimize using your container Id
        optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
        // Enables Google Optimize Experiment ID
        experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
        // Set Variation ID. 0 for original 1,2,3....
        variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
        // Any additional create only fields (optional)
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: process.env.GATSBY_SITE_URL || 'devesaurus.com',
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: process.env.GATSBY_BASE_URL || 'api.devesaurus.com',
        protocol: process.env.GATSBY_PROTOCOL || 'http',
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: false,
        perPage: 100,
        concurrentRequests: 20,
        includedRoutes: [
          '**/*/*/categories',
          '**/*/*/menus',
          '**/*/*/team',
          '**/*/*/word',
          '**/*/*/posts',
          '**/*/*/pages',
          '**/*/*/media',
          '**/*/*/tags',
          '**/*/*/taxonomies',
          '**/*/*/users',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Lato'],
        },
      },
    },
    // `gatsby-plugin-offline`,
  ],
};
