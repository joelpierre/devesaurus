export const updateObject = (oldObject, updatedValues) => ({
  ...oldObject,
  ...updatedValues,
});

export const mapOverACFComponents = components => {
  components.map(component => {
    component.acf_fc_layout = component.acf_fc_layout.replace(
      'WordPressAcf_',
      ''
    );
  });
  return components;
};

export const sortWordObj = word => {
  if (word) {
    delete word.author_id;
    delete word.author;
    delete word.author_nicename;
    delete word.content;
    delete word.date_modified;
    delete word.excerpt;
    delete word.yoast;

    return word;
  }

  return false;
};

export const randTheme = () => {
  const theme = ['brand', 'alpha', 'beta', 'gamma', 'psi', 'omega'];
  const rand = randNumBetween(0, theme.length);
  return theme[rand];
};

export const randNumBetween = (min = 0, max = 10) => {
  return Math.floor(Math.random() * max) + min;
};

export const mapTaxonomyTheme = (slug = 'default') => {
  let theme;

  switch (slug) {
    case 'development':
    case 'web-development':
      theme = 'alpha';
      break;
    case 'graphic-design':
    case 'design':
      theme = 'beta';
      break;
    case 'css':
    case 'css3':
      theme = 'gamma';
      break;
    case 'html':
    case 'html5':
      theme = 'psi';
      break;
    case 'news':
      theme = 'omega';
      break;
    default:
      theme = 'brand';
  }

  return theme;
};

export const breakpoint = {
  is(s) {
    const size = s.trim();
    const sizes = {
      xsmall: '599px',
      small: '600px',
      medium: '900px',
      large: '1200px',
      xlarge: '1800px',
    };

    // console.log(window.matchMedia);

    // Eslint doesn't like you accessing hasOwnProperty directly on object.
    // https://eslint.org/docs/rules/no-prototype-builtins
    if (Object.prototype.hasOwnProperty.call(sizes, size)) {
      return window.matchMedia(`only screen and (min-width: ${sizes[size]})`)
        .matches;
    }

    throw new ReferenceError(
      `The size ${size} is not a valid breakpoint: ${JSON.stringify(sizes)}`
    );
  },
};
