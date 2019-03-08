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
        <div>
          {props.allWordpressSiteMetadata.edges[0].node.name}
        </div>
        <div>
          {props.allWordpressSiteMetadata.edges[0].node.description}
        </div>
      </Aux>
    )}
  />
);

export default SiteInfo;
