import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

const SiteInfo = () => (
  <StaticQuery
    query={graphql`
  {
    allWordpressSiteMetadata{
      edges{
        node{
          name
          description
        }
      }
    }
  }
  `}
    render={props => (
      <>
        {props.allWordpressSiteMetadata.edges[0].node.name}
        <span>
          {props.allWordpressSiteMetadata.edges[0].node.description}
        </span>
      </>
    )}
  />
);

export default SiteInfo;
