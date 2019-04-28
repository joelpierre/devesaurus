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
  console.log(slug);
  let theme;

  switch (slug) {
    case 'development':
    case 'web-development':
      theme = 'beta';
      break;
    default:
      theme = 'brand';
  }

  return theme;
};
