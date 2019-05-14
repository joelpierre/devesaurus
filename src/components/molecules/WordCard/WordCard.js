import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as styles from './WordCard.module.scss';
import { wordPropTypeShape } from '../../../utils/propTypes';
import Button from '../Buttons/Button';
import Heading from '../../core/Heading/Heading';
import Label from '../../atoms/Label/Label';
import { mapTaxonomyIcon, mapTaxonomyTheme } from '../../../utils';

class WordCard extends PureComponent {
  constructor() {
    super();
    this.sortTerms = this.sortTerms.bind(this);

    this.state = {
      categories: null,
      tags: null,
    };
  }

  componentDidMount() {
    this.sortTerms();
  }

  sortTerms() {
    const { terms } = this.props;
    let cats;
    let tags;

    if (terms) {
      cats = terms.filter(term => {
        return term.taxonomy === 'word_category';
      });

      tags = terms.filter(term => {
        return term.taxonomy === 'word_tag';
      });
    }

    if (cats) {
      this.setState({ categories: cats });
    }

    if (tags) {
      this.setState({ tags });
    }
  }

  render() {
    const { title, slug, classes, contrast, acf } = this.props;
    const { categories, tags } = this.state;

    return (
      <article
        className={classNames([
          styles['word-card'],
          classes,
          {
            'theme--tint-alpha': !contrast,
            'theme--tint-beta': contrast,
          },
        ])}
        data-test="component-word-card"
      >
        {categories && (
          <div
            data-test="word-card-category"
            className={classNames(
              styles['word-card__category'],
              styles[
                `word-card--theme--${mapTaxonomyTheme(categories[0].slug)}`
              ]
            )}
          >
            <Link
              to={`/word-category/${categories[0].slug}`}
              className={styles['word-card__category-link']}
            >
              <span className={styles['word-card__category-text']}>
                {categories[0].name}
              </span>

              <span className={styles['word-card__category-icon']}>
                <FontAwesomeIcon icon={mapTaxonomyIcon(categories[0].slug)} />
              </span>
            </Link>
          </div>
        )}

        <Link to={`/word/${slug}`} className={styles['word-card__link']}>
          <span className={styles['word-card__link-text']}>{title}</span>
        </Link>

        <header
          data-test="word-card-header"
          className={styles['word-card__header']}
        >
          <Heading
            priority="3"
            data-test="word-card-heading"
            classes={styles['word-card__heading']}
          >
            {title}
          </Heading>
        </header>

        <div data-test="word-card-body" className={styles['word-card__body']}>
          <p className={styles['word-card__copy']}>
            <strong>Origin:</strong> {acf.origin.label} ({acf.origin.value})
          </p>
          <p className={styles['word-card__copy']}>
            <strong>Pronunciation:</strong> {acf.pronunciation}
          </p>
        </div>

        <footer className={classNames(styles['word-card__footer'])}>
          {tags && (
            <div className={styles['word-card__tags']}>
              {tags.map(tag => {
                // console.log(tag);
                return (
                  <Label
                    data-test="word-card-tag"
                    classes={styles['word-card__label']}
                    key={tag.slug}
                    link={`/word-tag/${tag.slug}`}
                    theme={mapTaxonomyTheme(tag.slug)}
                  >
                    <FontAwesomeIcon
                      icon={mapTaxonomyIcon(tag.slug)}
                      className={styles['word-card__icon']}
                    />
                    {tag.name}
                  </Label>
                );
              })}
            </div>
          )}
        </footer>
      </article>
    );
  }
}

WordCard.defaultProps = {
  classes: null,
};

WordCard.propTypes = {
  classes: PropTypes.string,
  contrast: PropTypes.bool.isRequired,
  ...wordPropTypeShape,
};

export default WordCard;
