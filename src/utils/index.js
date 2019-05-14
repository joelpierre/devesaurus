import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faChevronRight,
  faChevronLeft,
  faCode,
  faBracketsCurly,
  faTerminal,
  faCodeCommit,
  faCodeBranch,
  faAtomAlt,
  faTint,
  faPaintBrush,
  faPalette,
} from '@fortawesome/pro-regular-svg-icons';

/**
 * Add Fontawesome icons to library for app
 */
library.add(
  fab,
  faChevronRight,
  faChevronLeft,
  faCode,
  faBracketsCurly,
  faTerminal,
  faCodeCommit,
  faCodeBranch,
  faAtomAlt,
  faTint,
  faPaintBrush,
  faPalette
);

/**
 * Update any object passed through
 * @param oldObject
 * @param updatedValues
 * @returns updatedObject
 */
export const updateObject = (oldObject, updatedValues) => ({
  ...oldObject,
  ...updatedValues,
});

/**
 * Map over ACF Component array and amend the layout title
 * @param components
 * @returns {*}
 */
export const mapOverACFComponents = components => {
  components.map(component => {
    component.acf_fc_layout = component.acf_fc_layout.replace(
      'WordPressAcf_',
      ''
    );
  });
  return components;
};

/**
 * Amend the Word object passed through.
 * @param word
 * @returns {boolean|*}
 */
export const sortWordObj = word => {
  /* istanbul ignore else */
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

/**
 * Generate random number between two values
 * @param min
 * @param max
 * @returns {number}
 */
export const randNumBetween = (min = 0, max = 10) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Map taxonomy slugs to theme colours
 * @param slug
 * @returns {string}
 */
export const mapTaxonomyTheme = (slug = 'default') => {
  let theme;

  switch (slug) {
    case 'development':
    case 'web-development':
      theme = 'alpha';
      break;
    case 'web':
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
    case 'js':
    case 'es6':
      theme = 'omega';
      break;
    default:
      theme = 'brand';
  }

  return theme;
};

/**
 * Map taxonomy slug to fontAwesome icon
 * @param slug
 * @returns {array}
 */
export const mapTaxonomyIcon = (slug = 'default') => {
  let icon;

  switch (slug) {
    case 'development':
      icon = ['far', 'brackets-curly'];
      break;
    case 'web-development':
      icon = ['far', 'code'];
      break;
    case 'graphic-design':
      icon = ['far', 'palette'];
      break;
    case 'ux':
    case 'user-experience':
      icon = ['far', 'tint'];
      break;
    case 'design':
      icon = ['far', 'paint-brush'];
      break;
    case 'css':
    case 'css3':
      icon = ['fab', 'css3'];
      break;
    case 'html':
    case 'html5':
      icon = ['fab', 'html5'];
      break;
    case 'js':
    case 'es6':
    case 'javascript':
      icon = ['fab', 'js'];
      break;
    case 'bash':
    case 'shell':
    case 'zsh':
      icon = ['far', 'terminal'];
      break;
    case 'gitlab':
      icon = ['fab', 'gitlab'];
      break;
    case 'github':
      icon = ['far', 'code-commit'];
      break;
    case 'git-commands':
      icon = ['far', 'code-branch'];
      break;
    default:
      icon = ['far', 'atom-alt'];
  }

  return icon;
};

/**
 * Find out what the breakpoint is for responsive javascript functions
 * @type {{is(*): (*|undefined)}}
 */
/* istanbul ignore next */
export const breakpoint = {
  /* istanbul ignore next */
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
    /* istanbul ignore else */
    if (Object.prototype.hasOwnProperty.call(sizes, size)) {
      return window.matchMedia(`only screen and (min-width: ${sizes[size]})`)
        .matches;
    }

    throw new ReferenceError(
      `The size ${size} is not a valid breakpoint: ${JSON.stringify(sizes)}`
    );
  },
};
