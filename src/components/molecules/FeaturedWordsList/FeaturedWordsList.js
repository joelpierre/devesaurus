import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import styles from './FeaturedWordsList.module.scss';
import { mockWords } from '../../../../__mocks__/mock-words';
import { mapTaxonomyIcon } from '../../../utils';

const FeaturedWordsList = ({ classes }) => {
  return (
    <div
      data-test="component-featured-words-list"
      className={classNames(classes, styles['featured-words-list'])}
    >
      <ul className={classNames(styles['featured-words-list__list'])}>
        {mockWords.map(word => {
          return (
            <li
              key={word.id}
              className={classNames(styles['featured-words-list__item'])}
            >
              <Link
                className={classNames(styles['featured-words-list__link'])}
                to={`/word/${word.slug}`}
              >
                {word.title}
              </Link>
            </li>
          );
        })}
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
