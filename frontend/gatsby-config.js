/* eslint-disable max-len */

require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Devesaurus`,
    description: ``,
    author: `@devesaurus`,
    siteUrl: ``,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
        cookieDomain: 'example.com',
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: process.env.BASE_URL || 'api.devesaurus.com',
        protocol: process.env.PROTOCOL || 'https',
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true,
        perPage: 100,
        concurrentRequests: 10,
        includedRoutes: [
          '**/categories',
          '**/posts',
          '**/word',
          '**/team',
          '**/pages',
          '**/media',
          '**/tags',
          '**/taxonomies',
          '**/users',
        ],
        normalizer({ entities }) {
          return entities;
        },
      },
    },
  ],
};
