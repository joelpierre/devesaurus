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
      <li
        data-test="word-category-cloud-item"
        key={node.id}
        className={classNames(styles['label-cloud__item'])}
      >
        <Label
          className={styles['label-cloud__label']}
          link={'/devinitions/category/' + node.slug}
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

const WordCategoryCloud = ({ className }) => (
  <ul
    data-test="component-word-category-cloud"
    className={classNames(styles['label-cloud'], className)}
  >
    <StaticQuery
      data-test="component-word-category-cloud-query"
      query={query}
      render={props => <PureWordCategoryCloudList {...props} />}
    />
  </ul>
);

WordCategoryCloud.defaultProps = {
  className: undefined,
};

WordCategoryCloud.propTypes = {
  className: PropTypes.string,
};

export default WordCategoryCloud;

const query = graphql`
  {
    allWordpressWpWordCategory(
      limit: 10
      sort: { fields: count, order: DESC }
    ) {
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
