import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './WordCard.module.scss';
import { wordPropTypeShape } from '../../../utils/propTypes';
import Button from '../Buttons/Button';
import Heading from '../../core/Heading/Heading';
import Label from '../../atoms/Label/Label';

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
          {categories && (
            <div className={styles['word-card__categories']}>
              <Heading priority={5}>Categories</Heading>
              {categories.map(category => {
                // console.log(category);
                return (
                  <Label
                    key={category.slug}
                    data-test="word-card-category"
                    text={category.name}
                    link={`/word-category/${category.slug}`}
                  />
                );
              })}
            </div>
          )}

          {tags && (
            <div className={styles['word-card__tags']}>
              <Heading priority={5}>Tags</Heading>
              {tags.map(tag => {
                // console.log(tag);
                return (
                  <Label
                    key={tag.slug}
                    data-test="word-card-tag"
                    text={tag.name}
                    link={`/word-tag/${tag.slug}`}
                  />
                );
              })}
            </div>
          )}
        </div>

        <footer
          data-test="word-card-footer"
          className={classNames([styles['word-card__footer'], 'mt-1'])}
        >
          <Button
            data-test="word-card-button"
            link={`/word/${slug}`}
            text="Get definition"
            caps
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
