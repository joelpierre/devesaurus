import React from 'react';
import PropTypes from 'prop-types';
import WordCard from '../../molecules/WordCard/WordCard';
import { wordPropTypeShape } from '../../../utils/propTypeShapes';

const FeaturedWords = ({ words }) => {
  return (
    <section data-test="component-featured-words">
      <div className="container">
        <div className="row">
          {words && words.map(word => {
            return (
              <div className="flex-16 flex-md-4 flex-lg-4" data-test="featured-words-word">
                <WordCard origin={word.origin} word={word.word} syllables={word.syllables} results={word.results}/>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

FeaturedWords.defaultProps = {};

FeaturedWords.propTypes = {
  words: PropTypes.arrayOf(PropTypes.shape({ ...wordPropTypeShape })),
};

export default FeaturedWords;
