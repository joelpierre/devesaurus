import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../LabelCloud.module.scss';
import Label from '../../../atoms/Label/Label';
import { mapTaxonomyIcon, mapTaxonomyTheme } from '../../../../utils';

export const PureCategoryCloudList = ({ allWordpressCategory }) => (
  <>
    {allWordpressCategory.edges.map(({ node }) => (
      <li
        data-test="category-cloud-item"
        key={node.id}
        className={classNames(styles['label-cloud__item'])}
      >
        <Label
          classes={styles['label-cloud__label']}
          link={'/category/' + node.slug}
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

const CategoryCloud = ({ classes }) => (
  <ul
    data-test="component-category-cloud"
    className={classNames(styles['label-cloud'], classes)}
  >
    <StaticQuery
      data-test="component-category-cloud-query"
      query={query}
      render={props => <PureCategoryCloudList {...props} />}
    />
  </ul>
);

CategoryCloud.defaultProps = {
  classes: undefined,
};

CategoryCloud.propTypes = {
  classes: PropTypes.string,
};

export default CategoryCloud;

const query = graphql`
  {
    allWordpressCategory {
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
