import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Aux from './Aux/Aux';

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
      <Aux>
        {props.allWordpressSiteMetadata.edges[0].node.name}
        <span>
          {props.allWordpressSiteMetadata.edges[0].node.description}
        </span>
      </Aux>
    )}
  />
);

export default SiteInfo;
