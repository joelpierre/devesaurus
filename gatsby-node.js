const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);

exports.onCreateWebpackConfig = (
  {
    actions,
  },
) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|webp)$/,
          use: 'url-loader',
        },
        {
          test: /\.svg$/,
          use: [
            `html-loader`,
          ],
        },
      ],
    },
  });
};

exports.onCreateWebpackConfig = ({ getConfig }) => {
  const config = getConfig();
  const rule = config.module.rules.find(r => r.test.toString() === '/\\.(png|jpe?g|gif|svg|webp)$/');
  config.module.rules.splice(config.module.rules.indexOf(rule), 1);
  config.module.rules.push({
    test: /\.(png|jpe?g|gif|webp)$/,
    use: 'url-loader',
  });
  config.module.rules.push({
    test: /\.svg$/,
    use: 'html-loader',
  });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
  // createRedirect({
  //   fromPath: '/',
  //   toPath: '/home',
  //   redirectInBrowser: true,
  //   isPermanent: true,
  // });
  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allWordpressPage {
            edges {
              node {
                yoast_meta {
                  yoast_wpseo_title
                  yoast_wpseo_metadesc
                  yoast_wpseo_canonical
                }
                title
                slug
                featured_media {
                  alt_text
                  source_url
                  media_details {
                    width
                    height
                  }
                }
                acf {
                  page_theme
                }
              }
            }
          }
        }
      `,
    )

    // START PAGES //
      .then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // if (typeof window !== `undefined`) {
        // Create Page pages.
        const pageTemplate = path.resolve('./src/components/templates/page.js');
        _.each(result.data.allWordpressPage.edges, (edge) => {
          createPage({
            path: `/${edge.node.slug}/`,
            component: slash(pageTemplate),
            context: edge.node,
          });
        });
        resolve();
        // }
      })
      // ==== END PAGES ====

      // ==== POSTS (WORDPRESS NATIVE AND ACF) ====
      .then(() => {
        graphql(
          `
            {
              allWordpressPost {
                edges{
                  node{
                    yoast_meta {
                      yoast_wpseo_title
                      yoast_wpseo_metadesc
                      yoast_wpseo_canonical
                    }
                    title
                    slug
                    featured_media{
                      alt_text
                      source_url
                      media_details {
                        width
                        height
                      }
                    }
                    acf {
                      page_theme
                    }
                  }
                }
              }
            }
          `,
        )
          .then((result) => {
            if (result.errors) {
              console.log(result.errors);
              reject(result.errors);
            }

            // if (typeof window !== `undefined`) {
            const postTemplate = path.resolve('./src/components/templates/post.js');
            _.each(result.data.allWordpressPost.edges, (edge) => {
              createPage({
                path: `/post/${edge.node.slug}/`,
                component: slash(postTemplate),
                context: edge.node,
              });
            });
            resolve();
            // }
          });
      })
      // ==== END POSTS ====

      // ==== START WORDS ====
      .then(() => {
        graphql(
          `
            {
              allWordpressWpWord{
                edges{
                  node{
                    title
                    slug
                    acf{
                      definition
                      origin{
                        value
                        label
                      }
                      syllables{
                        count
                        list{
                          item
                        }
                      }
                      pronunciation
                      part_of_speech
                      examples
                    }
                  }
                }
              }
            }
          `,
        )
          .then((result) => {
            if (result.errors) {
              console.log(result.errors);
              reject(result.errors);
            }

            // if (typeof window !== `undefined`) {
            const wordTemplate = path.resolve('./src/components/templates/word.js');
            _.each(result.data.allWordpressWpWord.edges, (edge) => {
              createPage({
                path: `/word/${edge.node.slug}/`,
                component: slash(wordTemplate),
                context: edge.node,
              });
            });
            resolve();
            // }
          });
      })
      // ==== END WORDS ====

      // ==== START PERSON ====
      .then(() => {
        graphql(
          `
          {
            allWordpressWpTeam{
              edges{
                node{
                  title
                  slug
                  acf{
                    page_theme
                    job_title
                    short_description
                    facebook
                    twitter
                    instagram
                    linkedin
                  }
                }
              }
            }
          }
        `,
        )
          .then((result) => {
            if (result.errors) {
              console.log(result.errors);
              reject(result.errors);
            }

            // if (typeof window !== `undefined`) {
            const personTemplate = path.resolve('./src/components/templates/person.js');
            _.each(result.data.allWordpressWpTeam.edges, (edge) => {
              createPage({
                path: `/team/${edge.node.slug}/`,
                component: slash(personTemplate),
                context: edge.node,
              });
            });
            resolve();
            // }
          });
      });
    // ==== END PERSON ====
  });
};
