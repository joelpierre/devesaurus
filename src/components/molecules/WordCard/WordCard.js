import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as styles from './WordCard.module.scss';
import { wordPropTypeShape } from '../../../utils/propTypes';
import Heading from '../../../shared/Heading/Heading';
import Label from '../../atoms/Label/Label';
import { mapTaxonomyIcon, mapTaxonomyTheme } from '../../../utils';

class WordCard extends PureComponent {
  render() {
    const {
      title,
      slug,
      className,
      contrast,
      acf = {},
      tags,
      category,
    } = this.props;

    return (
      <article
        className={classNames([
          styles['word-card'],
          className,
          {
            'theme--tint-alpha': !contrast,
            'theme--tint-beta': contrast,
          },
        ])}
        data-test="component-word-card"
      >
        {category && (
          <div
            data-test="word-card-category"
            className={classNames(
              styles['word-card__category'],
              styles[`word-card--theme--${mapTaxonomyTheme(category.slug)}`]
            )}
          >
            <Link
              to={`/devinitions/category/${category.slug}`}
              className={styles['word-card__category-link']}
            >
              <span className={styles['word-card__category-text']}>
                {category.name}
              </span>

              <span className={styles['word-card__category-icon']}>
                <FontAwesomeIcon icon={mapTaxonomyIcon(category.slug)} />
              </span>
            </Link>
          </div>
        )}

        <Link to={`/devinition/${slug}`} className={styles['word-card__link']}>
          <span className={styles['word-card__link-text']}>{title}</span>
        </Link>

        <header
          data-test="word-card-header"
          className={styles['word-card__header']}
        >
          <Heading
            priority="3"
            data-test="word-card-heading"
            className={styles['word-card__heading']}
          >
            {title}
          </Heading>
        </header>

        {acf && (
          <div data-test="word-card-body" className={styles['word-card__body']}>
            <p className={styles['word-card__copy']}>
              <strong>Origin:</strong> {acf.origin.label} ({acf.origin.value})
            </p>
            <p className={styles['word-card__copy']}>
              <strong>Pronunciation:</strong> {acf.pronunciation}
            </p>
          </div>
        )}

        <footer className={classNames(styles['word-card__footer'])}>
          {tags && (
            <div className={styles['word-card__tags']}>
              {tags.map((tag, index) => {
                if (index <= 2) {
                  return (
                    <Label
                      data-test="word-card-tag"
                      className={styles['word-card__label']}
                      key={tag.slug}
                      link={`/devinitions/tag/${tag.slug}`}
                      theme={mapTaxonomyTheme(tag.slug)}
                    >
                      <FontAwesomeIcon
                        icon={mapTaxonomyIcon(tag.slug)}
                        className={styles['word-card__icon']}
                      />
                      {tag.name}
                    </Label>
                  );
                }

                return null;
              })}
            </div>
          )}
        </footer>
      </article>
    );
  }
}

WordCard.defaultProps = {
  className: null,
};

WordCard.propTypes = {
  className: PropTypes.string,
  contrast: PropTypes.bool.isRequired,
  ...wordPropTypeShape,
};

export default WordCard;
