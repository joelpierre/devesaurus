import PropTypes from 'prop-types';

export const wordPropTypeShape = {
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
