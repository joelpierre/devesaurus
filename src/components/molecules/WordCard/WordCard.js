import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './WordCard.module.scss';

const WordCard = (
  {
    word, origin, syllables, pronunciation, results, category, tags,
  },
) => {
  return (
    <article className={styles.wordCard} data-test="component-word-card">
      <header className={styles['word-card__header']}>
        <h3 className={styles['word-card__heading']}>
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
  word: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  syllables: PropTypes.shape({
    count: PropTypes.number.isRequired,
    list: PropTypes.instanceOf(Array).isRequired,
  }).isRequired,
  pronunciation: PropTypes.string,
  results: PropTypes.arrayOf(PropTypes.shape({
    definition: PropTypes.string.isRequired,
    partOfSpeech: PropTypes.oneOf(['noun', 'verb', 'adjective', 'pronoun', 'adverb', 'preposition', 'conjunction', 'interjection']),
  })).isRequired,
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }),
  tags: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  })),
};

export default WordCard;
