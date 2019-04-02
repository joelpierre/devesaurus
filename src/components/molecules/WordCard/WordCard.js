import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './WordCard.module.scss';
import { wordPropTypeShape } from '../../../utils/propTypeShapes';
import Button from '../Buttons/Button';

const WordCard = (
  {
    word, origin, syllables, pronunciation, link,
  },
) => {

  return (
    <article className={styles['word-card']} data-test="component-word-card">
      <header className={styles['word-card__header']}>
        <h3 data-test="" className={styles['word-card__heading']}>
          {word}
        </h3>
        {pronunciation && (<span className={styles['word-count__pronunciation']}>{pronunciation}</span>)}
        <h4 className={styles['word-card__origin']}>
          Origin: {origin}
        </h4>
        <p className={styles['word-card__syllables']}>
          Syllables {`(${syllables.count})`}:
          {syllables.list.map((syllable, index) => {
            return (<span key={index} className={styles['word-card__syllable']}>{syllable}</span>);
          })}
        </p>
      </header>

      <div className={styles['word-card__body']}>
        <Button link={link} text="Get definition"/>
      </div>
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
  link: PropTypes.string.isRequired,
};

export default WordCard;
