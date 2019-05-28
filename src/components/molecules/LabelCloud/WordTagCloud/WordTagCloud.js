import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../LabelCloud.module.scss';
import Label from '../../../atoms/Label/Label';
import { mapTaxonomyIcon, mapTaxonomyTheme } from '../../../../utils';

export const PureWordTagCloudList = ({ allWordpressWpWordTag }) => (
  <>
    {allWordpressWpWordTag.edges.map(({ node }) => (
      <li
        data-test="word-tag-cloud-item"
        key={node.id}
        className={classNames(styles['label-cloud__item'])}
      >
        <Label
          className={styles['label-cloud__label']}
          link={'/devinitions/tag/' + node.slug}
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

const WordTagCloud = ({ className }) => (
  <ul
    data-test="component-word-tag-cloud"
    className={classNames(styles['label-cloud'], className)}
  >
    <StaticQuery
      data-test="component-word-tag-cloud-query"
      query={query}
      render={props => <PureWordTagCloudList {...props} />}
    />
  </ul>
);

WordTagCloud.defaultProps = {
  className: undefined,
};

WordTagCloud.propTypes = {
  className: PropTypes.string,
};

export default WordTagCloud;

const query = graphql`
  {
    allWordpressWpWordTag {
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
