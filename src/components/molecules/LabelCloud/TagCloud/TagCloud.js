import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../LabelCloud.module.scss';
import Label from '../../../atoms/Label/Label';
import { mapTaxonomyIcon, mapTaxonomyTheme } from '../../../../utils';

export const PureTagCloudList = ({ allWordpressTag }) => (
  <>
    {allWordpressTag.edges.map(({ node }) => (
      <li key={node.id} className={classNames(styles['label-cloud__item'])}>
        <Label
          classes={styles['label-cloud__label']}
          link={'/tag/' + node.slug}
          theme={mapTaxonomyTheme(node.slug)}
        >
          <FontAwesomeIcon
            icon={mapTaxonomyIcon(node.slug)}
            className={styles['label-cloud__icon']}
          />
          {node.name}
        </Label>
      </li>
    ))}
  </>
);

const TagCloud = ({ classes }) => (
  <ul
    data-test="component-label-cloud"
    className={classNames(styles['label-cloud'], classes)}
  >
    <StaticQuery
      data-test="component-label-cloud-query"
      query={query}
      render={props => <PureTagCloudList {...props} />}
    />
  </ul>
);

TagCloud.defaultProps = {
  classes: undefined,
};

TagCloud.propTypes = {
  classes: PropTypes.string,
};

export default TagCloud;

const query = graphql`
  {
    allWordpressTag {
      edges {
        node {
          id
          name
          slug
          taxonomy
        }
      }
    }
  }
`;
