import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../LabelCloud.module.scss';
import Label from '../../../atoms/Label/Label';
import { mapTaxonomyIcon, mapTaxonomyTheme } from '../../../../utils';

export const PureWordCategoryCloudList = ({ allWordpressWpWordCategory }) => (
  <>
    {allWordpressWpWordCategory.edges.map(({ node }) => (
      <li key={node.id} className={classNames(styles['label-cloud__item'])}>
        <Label
          classes={styles['label-cloud__label']}
          link={'/word-category/' + node.slug}
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

const WordCategoryCloud = ({ classes }) => (
  <ul
    data-test="component-label-cloud"
    className={classNames(styles['label-cloud'], classes)}
  >
    <StaticQuery
      data-test="component-label-cloud-query"
      query={query}
      render={props => <PureWordCategoryCloudList {...props} />}
    />
  </ul>
);

WordCategoryCloud.defaultProps = {
  classes: undefined,
};

WordCategoryCloud.propTypes = {
  classes: PropTypes.string,
};

export default WordCategoryCloud;

const query = graphql`
  {
    allWordpressWpWordCategory {
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
