import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { graphql, Link, StaticQuery } from 'gatsby';
import styles from './FeaturedWordsList.module.scss';

export const PureFeaturedWordsList = ({ allWordpressWpWord }) => (
  <>
    {allWordpressWpWord.edges.map(({ node }) => {
      return (
        <li
          data-test="component-pure-featured-words-list"
          key={node.id}
          className={classNames(styles['featured-words-list__item'])}
        >
          <Link
            className={classNames(styles['featured-words-list__link'])}
            to={`/definition/${node.slug}`}
          >
            {node.title}
          </Link>
        </li>
      );
    })}
  </>
);

const FeaturedWordsList = ({ classes }) => (
  <div
    data-test="component-featured-words-list"
    className={classNames(classes, styles['featured-words-list'])}
  >
    <ul
      data-test="featured-words-list"
      className={classNames(styles['featured-words-list__list'])}
    >
      <StaticQuery
        data-test="component-featured-words-list-query"
        query={query}
        render={props => <PureFeaturedWordsList {...props} />}
      />
    </ul>
  </div>
);

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
        }
      }
    }
  }
`;
