const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);

exports.onCreateWebpackConfig = ({ actions, getConfig, options }) => {
  const prevConfig = getConfig();

  actions.replaceWebpackConfig({
    ...prevConfig,
    module: {
      ...prevConfig.module,
      rules: [
        ...prevConfig.module.rules.map(item => {
          const { test } = item;
          if (
            test &&
            test.toString() === '/\\.(ico|svg|jpg|jpeg|png|gif|webp)(\\?.*)?$/'
          ) {
            return {
              ...item,
              exclude: [path.resolve(__dirname, 'src/icons')],
            };
          }
          return { ...item };
        }),
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'html-loader',
              options,
            },
          ],
          include: [path.resolve(__dirname, 'src/icons')],
        },
      ],
    },
    resolve: {
      ...prevConfig.resolve,
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
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
    graphql(`
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
              date
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
    `)
      // START PAGES //
      .then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // if (typeof window !== `undefined`) {
        // Create Page pages.
        const pageTemplate = path.resolve(
          './src/components/templates/PageTemplate.js'
        );
        _.each(result.data.allWordpressPage.edges, edge => {
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
        graphql(`
          {
            allWordpressPost {
              edges {
                node {
                  yoast_meta {
                    yoast_wpseo_title
                    yoast_wpseo_metadesc
                    yoast_wpseo_canonical
                  }
                  title
                  slug
                  date
                  author {
                    name
                    slug
                  }
                  categories {
                    name
                    slug
                  }
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
        `).then(result => {
          if (result.errors) {
            console.log(result.errors);
            reject(result.errors);
          }

          // if (typeof window !== `undefined`) {
          const postTemplate = path.resolve(
            './src/components/templates/PostTemplate.js'
          );
          _.each(result.data.allWordpressPost.edges, edge => {
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
              allWordpressWpWord {
                edges {
                  node {
                    yoast_meta {
                      yoast_wpseo_title
                      yoast_wpseo_metadesc
                      yoast_wpseo_canonical
                    }
                    title
                    slug
                    link
                    date
                    type
                    word_tag
                    word_category
                    acf {
                      page_theme
                      definition
                      origin {
                        value
                        label
                      }
                      syllables {
                        count
                        list {
                          item
                        }
                      }
                      pronunciation
                      part_of_speech
                      synonyms {
                        post_title
                        post_name
                      }
                    }
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors);
            reject(result.errors);
          }

          // if (typeof window !== `undefined`) {
          const wordTemplate = path.resolve(
            './src/components/templates/WordTemplate.js'
          );
          _.each(result.data.allWordpressWpWord.edges, edge => {
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
        graphql(`
          {
            allWordpressWpTeam {
              edges {
                node {
                  yoast_meta {
                    yoast_wpseo_title
                    yoast_wpseo_metadesc
                    yoast_wpseo_canonical
                  }
                  title
                  slug
                  date
                  staff_department
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
        `).then(result => {
          if (result.errors) {
            console.log(result.errors);
            reject(result.errors);
          }

          // if (typeof window !== `undefined`) {
          const personTemplate = path.resolve(
            './src/components/templates/PersonTemplate.js'
          );
          _.each(result.data.allWordpressWpTeam.edges, edge => {
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
