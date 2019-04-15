import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

const SiteInfo = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressSiteMetadata {
          edges {
            node {
              name
              description
            }
          }
        }
      }
    `}
    render={({ allWordpressSiteMetadata }) => (
      <>
        {allWordpressSiteMetadata.edges[0].node.name}
        <span>{allWordpressSiteMetadata.edges[0].node.description}</span>
      </>
    )}
  />
);

export default SiteInfo;
