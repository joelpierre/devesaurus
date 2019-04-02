import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './WordCard.module.scss';
import { wordPropTypeShape } from '../../../utils/propTypeShapes';

const WordCard = (
  {
    word, origin, syllables, pronunciation, results, category, tags,
  },
) => {
  return (
    <article className={styles.wordCard} data-test="component-word-card">
      <header className={styles['word-card__header']}>
        <h3 data-test="" className={styles['word-card__heading']}>
          {word} {`(${results.partOfSpeech})`}
        </h3>
        {pronunciation && (<span className={styles['word-count__pronunciation']}>{pronunciation}</span>)}
        <h4 className={styles['word-card__origin']}>
          {origin}
        </h4>
        <p className={styles['word-card__syllables']}>
          Syllables {`(${syllables.count})`}:
          {syllables.list.map((syllable) => {
            return syllable;
          })}
        </p>
      </header>

      <div className={styles['word-card__body']}>
        <p className={styles['word-card__content']}>
          {results.definition}
        </p>
      </div>

      <footer className={styles['word-card__footer']}>
        {category && (
          <p className={styles['word-card__category']}>
            Category: {category.title}
          </p>
        )}

        {tags && (
          <p className={styles['word-card__tags']}>
            Tags: {tags.map((tag) => {
            return (<span className={styles['word-card__tag']}>{tag}</span>);
          })}
          </p>
        )}
      </footer>
    </article>
  );
};

WordCard.defaultProps = {
  pronunciation: null,
  category: null,
  tags: null,
};

WordCard.propTypes = {
  ...wordPropTypeShape,
};

export default WordCard;
