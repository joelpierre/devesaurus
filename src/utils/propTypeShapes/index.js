import PropTypes from 'prop-types';

export const wordPropTypeShape = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  terms: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      taxonomy: PropTypes.string.isRequired,
    })
  ),
  acf: PropTypes.shape({
    definition: PropTypes.string,
    origin: PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
    syllables: PropTypes.shape({
      count: PropTypes.string.isRequired,
      list: PropTypes.arrayOf(
        PropTypes.shape({
          item: PropTypes.string,
        })
      ).isRequired,
    }).isRequired,
    pronunciation: PropTypes.string,
  }),
};

export const themePropTypeShape = {
  theme: PropTypes.oneOf([
    'brand',
    'alpha',
    'tint-alpha',
    'tint-beta',
    'tint-psi',
    'tint-omega',
  ]),
};
