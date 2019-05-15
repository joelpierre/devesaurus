import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { graphql, Link, StaticQuery } from 'gatsby';
import styles from './FeaturedWordsList.module.scss';

export const PureList = ({ ...props }) => {
  const { edges } = props;
  return edges.map(({ node }) => {
    return (
      <li
        key={node.id}
        className={classNames(styles['featured-words-list__item'])}
      >
        <Link
          className={classNames(styles['featured-words-list__link'])}
          to={`/word/${node.slug}`}
        >
          {node.title}
        </Link>
      </li>
    );
  });
};

const FeaturedWordsList = ({ classes }) => {
  return (
    <div
      data-test="component-featured-words-list"
      className={classNames(classes, styles['featured-words-list'])}
    >
      <ul className={classNames(styles['featured-words-list__list'])}>
        <StaticQuery
          query={query}
          render={({ allWordpressWpWord }) => {
            return <PureList {...allWordpressWpWord} />;
          }}
        />
      </ul>
    </div>
  );
};

FeaturedWordsList.defaultProps = {
  classes: undefined,
};

FeaturedWordsList.propTypes = {
  classes: PropTypes.string,
};

export default FeaturedWordsList;

const query = graphql`
  {
    allWordpressWpWord {
      edges {
        node {
          id
          title
          slug
          acf {
            pronunciation
            origin {
              value
              label
            }
          }
          word_tags {
            id
            slug
            name
            taxonomy
          }
          word_cats {
            id
            slug
            name
            taxonomy
          }
        }
      }
    }
  }
`;
