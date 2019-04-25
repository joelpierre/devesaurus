import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './WordCard.module.scss';
import { wordPropTypeShape } from '../../../utils/propTypes';
import Button from '../Buttons/Button';
import Heading from '../../core/Heading/Heading';

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
    const { title, slug, classes, contrast } = this.props;
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

        <div data-test="word-card-body" className={styles['word-card__body']}>
          {categories &&
            categories.map(category => (
              <span key={category.slug} data-test="word-card-category">
                {category.name}
              </span>
            ))}

          {tags &&
            tags.map(tag => (
              <span key={tag.slug} data-test="word-card-tag">
                {tag.name}
              </span>
            ))}
        </div>

        <footer
          data-test="word-card-footer"
          className={styles['word-card__footer']}
        >
          <Button
            data-test="word-card-button"
            link={`/word/${slug}`}
            text="Get definition"
          />
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
