/* eslint-disable */
require('dotenv').config({
  path: `env/${process.env.NODE_ENV}.env`,
});

const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);
const itemsPerPage = 12;

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
              exclude: [path.resolve(__dirname, 'src/assets/icons')],
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
          include: [path.resolve(__dirname, 'src/assets/icons')],
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

        // Create Page pages.
        const pageTemplate = path.resolve(
          './src/templates/PageTemplate/PageTemplate.js'
        );
        _.each(result.data.allWordpressPage.edges, edge => {
          createPage({
            path: `/${edge.node.slug}/`,
            component: slash(pageTemplate),
            context: edge.node,
          });
        });
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

          const postTemplate = path.resolve(
            './src/templates/PostTemplate/PostTemplate.js'
          );

          const archiveTemplate = path.resolve(
            './src/templates/ArchiveTemplate/ArchiveTemplate.js'
          );

          const items = result.data.allWordpressPost.edges;
          const noOfPages = Math.ceil(items.length / itemsPerPage);

          Array.from({ length: noOfPages }).forEach((page, index) => {
            createPage({
              component: slash(archiveTemplate),
              path: index === 0 ? '/devegram' : `/devegram/${index + 1}/`,
              context: {
                items: items.slice(
                  index * itemsPerPage,
                  index * itemsPerPage + itemsPerPage
                ),
                noOfPages,
                currentPage: index + 1,
                taxonomy: 'devegram',
                name: 'Devegram',
              },
            });
          });

          _.each(result.data.allWordpressPost.edges, edge => {
            createPage({
              path: `/devegram/${edge.node.slug}/`,
              component: slash(postTemplate),
              context: edge.node,
            });
          });
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
                    examples {
                      type
                      codepen_url
                      code
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

          const wordTemplate = path.resolve(
            './src/templates/WordTemplate/WordTemplate.js'
          );

          const archiveTemplate = path.resolve(
            './src/templates/ArchiveTemplate/ArchiveTemplate.js'
          );

          const items = result.data.allWordpressWpWord.edges;
          const noOfPages = Math.ceil(items.length / itemsPerPage);

          Array.from({ length: noOfPages }).forEach((page, index) => {
            createPage({
              component: slash(archiveTemplate),
              path: index === 0 ? '/devinitions' : `/devinitions/${index + 1}/`,
              context: {
                items: items.slice(
                  index * itemsPerPage,
                  index * itemsPerPage + itemsPerPage
                ),
                noOfPages,
                currentPage: index + 1,
                taxonomy: 'words',
                name: 'Words Archive',
              },
            });
          });

          _.each(result.data.allWordpressWpWord.edges, edge => {
            createPage({
              path: `/devinition/${edge.node.slug}/`,
              component: slash(wordTemplate),
              context: edge.node,
            });
          });
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

          const personTemplate = path.resolve(
            './src/templates/PersonTemplate/PersonTemplate.js'
          );
          _.each(result.data.allWordpressWpTeam.edges, edge => {
            createPage({
              path: `/team/${edge.node.slug}/`,
              component: slash(personTemplate),
              context: edge.node,
            });
          });
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

          const archiveTemplate = path.resolve(
            './src/templates/ArchiveTemplate/ArchiveTemplate.js'
          );

          const taxonomyTemplate = path.resolve(
            './src/templates/TaxonomyTemplate/TaxonomyTemplate.js'
          );

          const items = result.data.allWordpressWpWordCategory.edges;
          const noOfPages = Math.ceil(items.length / itemsPerPage);

          Array.from({ length: noOfPages }).forEach((page, index) => {
            createPage({
              component: slash(archiveTemplate),
              path:
                index === 0
                  ? '/devinitions/categories'
                  : `/devinitions/categories/${index + 1}/`,
              context: {
                items: items.slice(
                  index * itemsPerPage,
                  index * itemsPerPage + itemsPerPage
                ),
                noOfPages,
                currentPage: index + 1,
                taxonomy: 'word-categories',
                name: 'Word Categories Archive',
              },
            });
          });

          _.each(result.data.allWordpressWpWordCategory.edges, edge => {
            createPage({
              path: `/devinitions/category/${edge.node.slug}/`,
              component: slash(taxonomyTemplate),
              context: edge.node,
            });
          });
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

          const archiveTemplate = path.resolve(
            './src/templates/ArchiveTemplate/ArchiveTemplate.js'
          );

          const taxonomyTemplate = path.resolve(
            './src/templates/TaxonomyTemplate/TaxonomyTemplate.js'
          );

          const items = result.data.allWordpressWpWordTag.edges;
          const noOfPages = Math.ceil(items.length / itemsPerPage);

          Array.from({ length: noOfPages }).forEach((page, index) => {
            createPage({
              component: slash(archiveTemplate),
              path:
                index === 0
                  ? '/devinitions/tags'
                  : `/devinitions/tags/${index + 1}/`,
              context: {
                items: items.slice(
                  index * itemsPerPage,
                  index * itemsPerPage + itemsPerPage
                ),
                noOfPages,
                currentPage: index + 1,
                taxonomy: 'word-tags',
                name: 'Word Tag Archive',
              },
            });
          });

          _.each(result.data.allWordpressWpWordTag.edges, edge => {
            createPage({
              path: `/devinitions/tag/${edge.node.slug}/`,
              component: slash(taxonomyTemplate),
              context: edge.node,
            });
          });
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

          const archiveTemplate = path.resolve(
            './src/templates/ArchiveTemplate/ArchiveTemplate.js'
          );

          const taxonomyTemplate = path.resolve(
            './src/templates/TaxonomyTemplate/TaxonomyTemplate.js'
          );

          const items = result.data.allWordpressTag.edges;
          const noOfPages = Math.ceil(items.length / itemsPerPage);

          Array.from({ length: noOfPages }).forEach((page, index) => {
            createPage({
              component: slash(archiveTemplate),
              path: index === 0 ? '/tags' : `/tags/${index + 1}/`,
              context: {
                items: items.slice(
                  index * itemsPerPage,
                  index * itemsPerPage + itemsPerPage
                ),
                noOfPages,
                currentPage: index + 1,
                taxonomy: 'tags',
                name: 'Blog Tag Archive',
              },
            });
          });

          _.each(result.data.allWordpressTag.edges, edge => {
            createPage({
              path: `/tag/${edge.node.slug}/`,
              component: slash(taxonomyTemplate),
              context: edge.node,
            });
          });
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

          const archiveTemplate = path.resolve(
            './src/templates/ArchiveTemplate/ArchiveTemplate.js'
          );

          const taxonomyTemplate = path.resolve(
            './src/templates/TaxonomyTemplate/TaxonomyTemplate.js'
          );

          const items = result.data.allWordpressCategory.edges;
          const noOfPages = Math.ceil(items.length / itemsPerPage);

          Array.from({ length: noOfPages }).forEach((page, index) => {
            createPage({
              component: slash(archiveTemplate),
              path: index === 0 ? '/categories' : `/categories/${index + 1}/`,
              context: {
                items: items.slice(
                  index * itemsPerPage,
                  index * itemsPerPage + itemsPerPage
                ),
                noOfPages,
                currentPage: index + 1,
                taxonomy: 'categories',
                name: 'Blog Categories Archive',
              },
            });
          });

          _.each(result.data.allWordpressCategory.edges, edge => {
            createPage({
              path: `/category/${edge.node.slug}/`,
              component: slash(taxonomyTemplate),
              context: edge.node,
            });
          });

          resolve();
        });
      }); // ==== END CATEGORY ==== //
  });
};
