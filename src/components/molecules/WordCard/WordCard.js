import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as styles from './WordCard.module.scss';
import { wordPropTypeShape } from '../../../utils/propTypeShapes';
import Button from '../Buttons/Button';

const WordCard = ({ title, slug, terms, acf }) => {
  let categories;
  let tags;

  const sortTerms = () => {
    if (terms) {
      categories = terms.map(term => {
        return term.taxonomy === 'word_category';
      });

      tags = terms.map(term => {
        return term.taxonomy === 'word_tag';
      });
    }
  };

  useEffect(() => {
    sortTerms();
  }, []);

  return (
    <article className={styles['word-card']} data-test="component-word-card">
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
};

WordCard.propTypes = {
  ...wordPropTypeShape,
};

export default WordCard;
