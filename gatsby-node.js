const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
  createRedirect({
    fromPath: '/',
    toPath: '/home',
    redirectInBrowser: true,
    isPermanent: true,
  });
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local WordPress graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.
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
                featured_media {
                  alt_text
                  source_url
                  media_details {
                    width
                    height
                  }
                }
                slug
                acf {
                  page_theme
                  components_page{
                    __typename
                    ...textBlockFields
                    ...imageBlockFields
                    ...inlineQuoteFields
                  }
                }
              }
            }
          }
        }
        
        fragment inlineQuoteFields on WordPressAcf_inline_quote {
          highlight
          author
          quote
          theme
        }
        
        fragment imageBlockFields on WordPressAcf_image_block {
          theme
          fill_screen
          image{
            alt_text
            source_url
            media_details{
              width
              height
              image_meta {
                caption
                title
              }
            }
          }
        }
        
        fragment textBlockFields on WordPressAcf_text_block {
          theme
          highlight
          content
        }
      `,
    )

    // START PAGES //
      .then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Create Page pages.
        const pageTemplate = path.resolve('./src/components/templates/page.js');
        _.each(result.data.allWordpressPage.edges, (edge) => {
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
            const postTemplate = path.resolve('./src/components/templates/post.js');
            _.each(result.data.allWordpressPost.edges, (edge) => {
              createPage({
                path: `/post/${edge.node.slug}/`,
                component: slash(postTemplate),
                context: edge.node,
              });
            });
            resolve();
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
            const wordTemplate = path.resolve('./src/components/templates/word.js');
            _.each(result.data.allWordpressWpWord.edges, (edge) => {
              createPage({
                path: `/word/${edge.node.slug}/`,
                component: slash(wordTemplate),
                context: edge.node,
              });
            });
            resolve();
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
            const personTemplate = path.resolve('./src/components/templates/person.js');
            _.each(result.data.allWordpressWpTeam.edges, (edge) => {
              createPage({
                path: `/team/${edge.node.slug}/`,
                component: slash(personTemplate),
                context: edge.node,
              });
            });
            resolve();
          });
      });
    // ==== END PERSON ====
  });
};
