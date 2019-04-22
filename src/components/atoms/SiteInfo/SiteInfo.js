import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { graphql, StaticQuery } from 'gatsby';

import styles from './SiteInfo.module.scss';

export const PureSiteInfo = ({ allWordpressSiteMetadata, classes }) => (
  <div
    data-test="component-site-info"
    className={classNames([classes, styles['site-info']])}
  >
    <span className={styles['site-info__heading']}>
      {allWordpressSiteMetadata.edges[0].node.name}
    </span>
    <span className={styles['site-info__slogan']}>
      {allWordpressSiteMetadata.edges[0].node.description}
    </span>
  </div>
);

const SiteInfo = ({ classes }) => (
  <StaticQuery
    data-test="component-site-info-query"
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
    render={props => <PureSiteInfo {...props} classes={classes} />}
  />
);

SiteInfo.defaultProps = {
  classes: null,
};

SiteInfo.propTypes = {
  classes: PropTypes.string,
};

export default SiteInfo;
