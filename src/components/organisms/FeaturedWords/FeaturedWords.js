import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import WordCard from '../../molecules/WordCard/WordCard';
import './FeaturedWords.scss';
import { wordPropTypeShape } from '../../../utils/propTypeShapes';
import sortWordObj from '../../../helpers/sortWordObj';

const FeaturedWords = ({ words }) => {

  const sortWords = () => {
    if (words) {
      words.map((word) => {
        return sortWordObj(word);
      });
    }
  };

  useEffect(() => {
    sortWords();
  }, []);

  return (
    <section data-test="component-featured-words">
      <div className="container">
        <div className="row">
          {words.map((word, index) => {
            return (
              <div data-test="featured-words-word" key={index} className="flex-16 flex-md-5 flex-lg-4">
                <WordCard slug={word.slug} title={word.title} acf={word.acf} terms={word.terms}/>
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
