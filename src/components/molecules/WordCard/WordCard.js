import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './WordCard.module.scss';
import { wordPropTypeShape } from '../../../utils/propTypeShapes';
import Button from '../Buttons/Button';

class WordCard extends PureComponent {
  constructor() {
    super();
    this.sortTerms = this.sortTerms.bind(this);
    this.categories = null;
    this.tags = null;
  }

  componentDidMount() {
    this.sortTerms();
  }

  sortTerms() {
    const { terms } = this.props;

    // console.log(terms);

    if (terms) {
      this.categories = terms.filter(term => {
        return term.taxonomy === 'word_category';
      });

      this.tags = terms.filter(term => {
        return term.taxonomy === 'word_tag';
      });
    }

    // console.log(this.categories);
    // console.log(this.tags);
  }

  render() {
    const { title, slug, acf, classes, contrast } = this.props;
    // console.log(acf);
    // console.log(this.categories);
    // console.log(this.tags);
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
        <header className={styles['word-card__header']}>
          <h3 data-test="" className={styles['word-card__heading']}>
            {title}
          </h3>
        </header>

        <p>
          {this.categories &&
            this.categories.map(category => {
              <span data-test="word-card-category">{category}</span>;
            })}
        </p>

        <p>
          {this.tags &&
            this.tags.map(tag => {
              <span data-test="word-card-tag">{tag}</span>;
            })}
        </p>

        <div className={styles['word-card__body']}>
          <Button link={`/word/${slug}`} text="Get definition" />
        </div>
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
