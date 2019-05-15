import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './TagCloud.module.scss';
import Label from '../../atoms/Label/Label';
import { mapTaxonomyIcon, mapTaxonomyTheme } from '../../../utils';

export const getCloudQuery = taxonomy => {
  let query;

  switch (taxonomy) {
    case 'post_tag':
      query = tagQuery;
      return query;

    case 'category':
      query = categoryQuery;
      return query;

    case 'word_tag':
      query = wordTagQuery;
      return query;

    case 'word_category':
      query = wordCategoryQuery;
      return query;

    default:
      query = wordTagQuery;
      return query;
  }
};

export const PureTagCloud = ({ classes, taxonomy, ...props }) => {
  let obj;
  let link;

  switch (taxonomy) {
    case 'post_tag':
      obj = props.allWordpressTag;
      link = `/tag/`;
      break;

    case 'category':
      obj = props.allWordpressCategory;
      link = `/category/`;
      break;

    case 'word_tag':
      obj = props.allWordpressWpWordTag;
      link = `/word-tag/`;
      break;

    case 'word_category':
      obj = props.allWordpressWpWordCategory;
      link = `/word-category/`;
      break;

    default:
      obj = props.allWordpressWpWordTag;
      link = `/word-tag/`;
  }

  return (
    <ul
      data-test="component-tag-cloud"
      className={classNames(styles['tag-cloud'], classes)}
    >
      {obj &&
        obj.edges.map(({ node }) => (
          <li key={node.id} className={classNames(styles['tag-cloud__item'])}>
            <Label
              classes={styles['tag-cloud__label']}
              link={link + node.slug}
              theme={mapTaxonomyTheme(node.slug)}
            >
              <FontAwesomeIcon
                icon={mapTaxonomyIcon(node.slug)}
                className={styles['tag-cloud__icon']}
              />
              {node.name}
            </Label>
          </li>
        ))}
    </ul>
  );
};

const TagCloud = ({ classes, taxonomy }) => {
  return (
    <StaticQuery
      data-test="component-tag-cloud-query"
      query={getCloudQuery(taxonomy)}
      render={props => (
        <PureTagCloud {...props} taxonomy={taxonomy} classes={classes} />
      )}
    />
  );
};

TagCloud.defaultProps = {
  classes: undefined,
  taxonomy: 'word_tag',
};

TagCloud.propTypes = {
  classes: PropTypes.string,
  taxonomy: PropTypes.oneOf(['category', 'tag', 'word_tag', 'word_category']),
};

export default TagCloud;

const wordTagQuery = graphql`
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

const tagQuery = graphql`
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

const categoryQuery = graphql`
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

const wordCategoryQuery = graphql`
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
