import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './WordCard.module.scss';
import { wordPropTypeShape } from '../../../utils/propTypeShapes';
import Button from '../Buttons/Button';

let categories;
let tags;

class WordCard extends PureComponent {
  constructor() {
    super();
    this.sortTerms = this.sortTerms.bind(this);
  }

  componentDidMount() {
    this.sortTerms();
  }

  sortTerms() {
    const { terms } = this.props;

    if (terms) {
      categories = terms.map(term => {
        return term.taxonomy === 'word_category';
      });

      tags = terms.map(term => {
        return term.taxonomy === 'word_tag';
      });
    }
  }

  render() {
    const { title, slug, acf, classes, contrast } = this.props;

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
          {categories &&
            categories.map(category => {
              return <span>{category}</span>;
            })}
        </p>

        <p>
          {tags &&
            tags.map(tag => {
              return <span>{tag}</span>;
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
