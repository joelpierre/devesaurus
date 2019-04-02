import React from 'react';
import PropTypes from 'prop-types';
import WordCard from '../../molecules/WordCard/WordCard';
import './FeaturedWords.scss';
import { wordPropTypeShape } from '../../../utils/propTypeShapes';

const FeaturedWords = ({ words }) => {
  return (
    <section data-test="component-featured-words">
      <div className="container">
        <div className="row">
          {words && words.map((word, index) => {
            return (
              <div
                key={index}
                className="flex-16 flex-md-4 flex-lg-4 featured-words__word-card"
                data-test="featured-words-word"
              >
                <WordCard
                  link={word.link}
                  origin={word.origin}
                  word={word.word}
                  syllables={word.syllables}
                  results={word.results}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

FeaturedWords.propTypes = {
  words: PropTypes.arrayOf(PropTypes.shape({ ...wordPropTypeShape })).isRequired,
};

export default FeaturedWords;
