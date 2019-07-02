/* eslint-disable */
require('dotenv').config({
  path: `env/${process.env.NODE_ENV}.env`,
});

const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Devesaurus`,
    description: `A place to get simplified definitions for complicated dev related words`,
    author: `@devesaurus`,
    siteUrl: process.env.GATSBY_SITE_URL || 'https://www.devesaurus.com',
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
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
        path: `${__dirname}/static/images`,
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
        icon: `static/images/favicon.jpg`, // This path is relative to the root of the site.
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
        sass: path.join(__dirname, 'src/assets/sass'),
        icons: path.join(__dirname, 'src/assets/icons'),
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
        baseUrl: process.env.GATSBY_API_URL || 'api.devesaurus.com',
        protocol: process.env.GATSBY_PROTOCOL || 'https',
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: false,
        perPage: 100,
        concurrentRequests: 20,
        includedRoutes: [
          '**/*/*/categories',
          '**/*/*/tags',
          '**/*/*/menus',
          '**/*/*/team',
          '**/*/*/word',
          '**/*/*/posts',
          '**/*/*/pages',
          '**/*/*/media',
          '**/*/*/post_tag',
          '**/*/*/word_tag',
          '**/*/*/staff_department',
          '**/*/*/word_category',
          '**/*/*/users',
        ],
        normalizer: mapThings,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Montserrat', 'Lato'],
        },
      },
    },
    // `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
};

function mapThings({ entities }) {
  // Post Types
  const pages = entities.filter(e => e.__type === 'wordpress__PAGE');
  const posts = entities.filter(e => e.__type === 'wordpress__POST');
  const words = entities.filter(e => e.__type === 'wordpress__wp_word');

  // Taxonomies
  const tags = entities.filter(e => e.__type === 'wordpress__TAG');
  const cats = entities.filter(e => e.__type === 'wordpress__CATEGORY');

  const teamDept = entities.filter(
    e => e.__type === `wordpress__wp_staff_department`
  );
  const wordTags = entities.filter(e => e.__type === `wordpress__wp_word_tag`);
  const wordCats = entities.filter(
    e => e.__type === `wordpress__wp_word_category`
  );

  return entities.map(e => {
    // Add Posts to category query
    if (e.__type === 'wordpress__CATEGORY') {
      const id = e.id;
      let catPosts;

      catPosts = posts.map(post => {
        if (post.categories___NODE) {
          if (post.categories___NODE.includes(id)) {
            return post.id;
          }
        }
      });
      catPosts = Array.from(new Set(catPosts));
      e.posts___NODE = catPosts.filter(post => post !== undefined);
    }

    // Add Words to word category query
    if (e.__type === 'wordpress__wp_word_category') {
      const id = e.id;
      let catWords;

      catWords = words.map(word => {
        if (word.word_cats___NODE) {
          if (word.word_cats___NODE.includes(id)) {
            return word.id;
          }
        }
      });

      catWords = Array.from(new Set(catWords));
      e.words___NODE = catWords.filter(word => word !== undefined);
    }

    // Add Posts to tag query
    if (e.__type === 'wordpress__TAG') {
      const id = e.id;
      let tagPosts;

      tagPosts = posts.map(post => {
        if (post.tags___NODE) {
          if (post.tags___NODE.includes(id)) {
            return post.id;
          }
        }
      });

      tagPosts = Array.from(new Set(tagPosts));
      e.posts___NODE = tagPosts.filter(post => post !== undefined);
    }

    // Add Words to word tag query
    if (e.__type === 'wordpress__wp_word_tag') {
      const id = e.id;
      let tagWords;

      tagWords = words.map(word => {
        if (word.word_tags___NODE) {
          if (word.word_tags___NODE.includes(id)) {
            return word.id;
          }
        }
      });

      tagWords = Array.from(new Set(tagWords));
      e.words___NODE = tagWords.filter(word => word !== undefined);
    }

    // Add word tags to words
    if (e.__type === `wordpress__wp_word`) {
      const hasWordTag =
        e.word_tag && Array.isArray(e.word_tag) && e.word_tag.length;

      if (hasWordTag) {
        e.word_tags___NODE = e.word_tag.map(
          tag => wordTags.find(gObj => tag === gObj.wordpress_id).id
        );
      }
    }

    // Add word categories to words
    if (e.__type === `wordpress__wp_word`) {
      const hasWordCat =
        e.word_category &&
        Array.isArray(e.word_category) &&
        e.word_category.length;

      if (hasWordCat) {
        e.word_cats___NODE = e.word_category.map(
          c => wordCats.find(gObj => c === gObj.wordpress_id).id
        );
      }
    }

    // Add staff dept to team
    if (e.__type === `wordpress__wp_team`) {
      const hasDept =
        e.staff_department &&
        Array.isArray(e.staff_department) &&
        e.staff_department.length;

      if (hasDept) {
        e.department___NODE = e.staff_department.map(
          c => teamDept.find(gObj => c === gObj.wordpress_id).id
        );
      }
    }

    // Return all mapped entities
    return e;
  });
}
