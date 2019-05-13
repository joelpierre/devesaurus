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

export const columnShape = PropTypes.oneOf([
  '1',
  1,
  '2',
  2,
  '3',
  3,
  '4',
  4,
  '5',
  5,
  '6',
  6,
  '7',
  7,
  '8',
  8,
  '9',
  9,
  '10',
  10,
  '11',
  11,
  '12',
  12,
]);

export const defaultSize = (size = 'md') => ({
  size,
});

export const sizePropType = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'full']),
};

export const defaultTheme = (theme = 'brand') => ({
  theme,
});

export const themePropType = {
  theme: PropTypes.oneOf([
    'brand',
    'alpha',
    'beta',
    'gamma',
    'psi',
    'omega',
    'tint-alpha',
    'tint-beta',
    'tint-gamma',
    'tint-psi',
    'tint-omega',
    'gradient-brand',
  ]),
};

export const defaultPageTheme = (theme = 'brand') => ({
  pageTheme: theme,
});

export const pageThemePropType = {
  pageTheme: PropTypes.oneOf([
    'brand',
    'alpha',
    'beta',
    'gamma',
    'psi',
    'omega',
    'tint-alpha',
    'tint-beta',
    'tint-gamma',
    'tint-psi',
    'tint-omega',
  ]),
};
