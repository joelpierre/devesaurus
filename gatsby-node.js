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
  //   toPath: '/about',
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
        graphql(`
          {
            allWordpressWpWord {
              edges {
                node {
                  id
                  yoast_meta {
                    yoast_wpseo_title
                    yoast_wpseo_metadesc
                    yoast_wpseo_canonical
                  }
                  title
                  slug
                  date
                  type
                  word_tags {
                    id
                    name
                    slug
                    taxonomy
                  }
                  word_cats {
                    id
                    name
                    slug
                    taxonomy
                  }
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
        `).then(result => {
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
                  department {
                    id
                    slug
                    name
                    taxonomy
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
      }) // ==== END PERSON ====

      // ==== START WORD CATEGORY ====
      .then(() => {
        graphql(`
          {
            allWordpressWpWordCategory {
              edges {
                node {
                  id
                  wordpress_id
                  name
                  slug
                  taxonomy
                  words {
                    id
                    title
                    slug
                    date
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
          }
        `).then(result => {
          if (result.errors) {
            console.log(result.errors);
            reject(result.errors);
          }

          // if (typeof window !== `undefined`) {
          const archiveTemplate = path.resolve(
            './src/components/templates/ArchiveTemplate.js'
          );
          _.each(result.data.allWordpressWpWordCategory.edges, edge => {
            createPage({
              path: `/word-category/${edge.node.slug}/`,
              component: slash(archiveTemplate),
              context: edge.node,
            });
          });
          resolve();
          // }
        });
      })
      // ==== END WORD CATEGORY ==== //

      // ==== START WORD TAG ====
      .then(() => {
        graphql(`
          {
            allWordpressWpWordTag {
              edges {
                node {
                  id
                  wordpress_id
                  name
                  slug
                  taxonomy
                  words {
                    id
                    title
                    slug
                    date
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
          }
        `).then(result => {
          if (result.errors) {
            console.log(result.errors);
            reject(result.errors);
          }

          // if (typeof window !== `undefined`) {
          const archiveTemplate = path.resolve(
            './src/components/templates/ArchiveTemplate.js'
          );
          _.each(result.data.allWordpressWpWordTag.edges, edge => {
            createPage({
              path: `/word-tag/${edge.node.slug}/`,
              component: slash(archiveTemplate),
              context: edge.node,
            });
          });
          resolve();
          // }
        });
      })
      // ==== END WORD TAG ==== //

      // ==== START TAG ====
      .then(() => {
        graphql(`
          {
            allWordpressTag {
              edges {
                node {
                  wordpress_id
                  name
                  slug
                  taxonomy
                  posts {
                    id
                    title
                    slug
                    date
                    author {
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
          }
        `).then(result => {
          if (result.errors) {
            console.log(result.errors);
            reject(result.errors);
          }

          // if (typeof window !== `undefined`) {
          const archiveTemplate = path.resolve(
            './src/components/templates/ArchiveTemplate.js'
          );
          _.each(result.data.allWordpressTag.edges, edge => {
            createPage({
              path: `/tag/${edge.node.slug}/`,
              component: slash(archiveTemplate),
              context: edge.node,
            });
          });
          resolve();
          // }
        });
      })
      // ==== END TAG ==== //

      // ==== START CATEGORY ====
      .then(() => {
        graphql(`
          {
            allWordpressCategory {
              edges {
                node {
                  wordpress_id
                  name
                  slug
                  taxonomy
                  posts {
                    id
                    title
                    slug
                    date
                    author {
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
          }
        `).then(result => {
          if (result.errors) {
            console.log(result.errors);
            reject(result.errors);
          }

          // if (typeof window !== `undefined`) {
          const archiveTemplate = path.resolve(
            './src/components/templates/ArchiveTemplate.js'
          );
          _.each(result.data.allWordpressCategory.edges, edge => {
            createPage({
              path: `/category/${edge.node.slug}/`,
              component: slash(archiveTemplate),
              context: edge.node,
            });
          });
          resolve();
          // }
        });
      }); // ==== END CATEGORY ==== //
  });
};
