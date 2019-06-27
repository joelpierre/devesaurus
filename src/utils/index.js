import { library } from '@fortawesome/fontawesome-svg-core';
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
  faBooks,
  faFont,
  faSitemap,
  faAnalytics,
  faServer,
  faUsers,
  faIcons,
  faAd,
  faObjectGroup,
  faNewspaper,
  faBuilding,
} from '@fortawesome/pro-regular-svg-icons';
import { faSearch, faHeart } from '@fortawesome/pro-solid-svg-icons';
import {
  faFacebook,
  faFacebookF,
  faGit,
  faAws,
  faNodeJs,
  faGoogle,
  faCss3,
  faHtml5,
  faPhp,
  faPython,
  faTwitter,
  faTwitterSquare,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
  faGithub,
  faBitbucket,
} from '@fortawesome/free-brands-svg-icons';

/**
 * Add Fontawesome icons to library for app
 */
library.add(
  faHtml5,
  faCss3,
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
  faBooks,
  faFont,
  faSitemap,
  faAnalytics,
  faServer,
  faUsers,
  faIcons,
  faAd,
  faObjectGroup,
  faNewspaper,
  faBuilding,
  faSearch,
  faHeart,
  faFacebook,
  faFacebookF,
  faGit,
  faAws,
  faNodeJs,
  faGoogle,
  faPhp,
  faPython,
  faTwitter,
  faTwitterSquare,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
  faGithub,
  faBitbucket
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
    case 'backend-development':
    case 'frontend-development':
    case 'seo':
    case 'social':
    case 'web-development':
      theme = 'alpha';
      break;

    case 'web':
    case 'graphic-design':
    case 'design':
    case 'ui-design':
    case 'ux-design':
    case 'bash':
    case 'shell':
    case 'zsh':
      theme = 'beta';
      break;

    case 'css':
    case 'css3':
    case 'advertisement':
    case 'analytics':
    case 'hosting':
    case 'vps':
    case 'virtual-private-server':
    case 'git':
      theme = 'gamma';
      break;

    case 'html':
    case 'html5':
    case 'markup':
    case 'nodejs':
    case 'aws':
    case 'gcp':
    case 'php':
    case 'dev-ops':
    case 'python':
      theme = 'psi';
      break;

    case 'news':
    case 'js':
    case 'es6':
    case 'client-side':
    case 'server-side':
    case 'cms':
    case 'content-management-system':
    case 'systems-architecture':
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
    case 'news':
      icon = ['far', 'newspaper'];
      break;
    case 'cms':
    case 'content-management-system':
    case 'systems-architecture':
      icon = ['far', 'sitemap'];
      break;
    case 'nodejs':
      icon = ['fab', 'node-js'];
      break;
    case 'aws':
      icon = ['fab', 'aws'];
      break;
    case 'client-side':
    case 'browser':
      icon = ['far', 'browser'];
      break;
    case 'gcp':
      icon = ['fab', 'google'];
      break;
    case 'php':
      icon = ['far', 'php'];
      break;
    case 'server-side':
    case 'dev-ops':
    case 'hosting':
    case 'vps':
    case 'virtual-private-server':
      icon = ['far', 'server'];
      break;
    case 'python':
      icon = ['far', 'python'];
      break;
    case 'advertisement':
      icon = ['far', 'ad'];
      break;
    case 'analytics':
      icon = ['far', 'analytics'];
      break;
    case 'icons':
      icon = ['far', 'icons'];
      break;
    case 'web':
      icon = ['far', 'globe'];
      break;
    case 'seo':
    case 'search-engine-optimisation':
      icon = ['fas', 'search'];
      break;
    case 'social':
      icon = ['far', 'users'];
      break;
    case 'development':
    case 'frontend-development':
      icon = ['far', 'brackets-curly'];
      break;
    case 'backend-development':
    case 'web-development':
    case 'markup':
      icon = ['far', 'code'];
      break;
    case 'ui-design':
      icon = ['far', 'object-group'];
      break;
    case 'graphic-design':
      icon = ['far', 'palette'];
      break;
    case 'ux':
    case 'ux-design':
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
    case 'terminal':
    case 'shell':
    case 'zsh':
      icon = ['far', 'terminal'];
      break;
    case 'bitbucket':
      icon = ['fab', 'bitbucket'];
      break;
    case 'gitlab':
      icon = ['fab', 'gitlab'];
      break;
    case 'github':
      icon = ['fab', 'github'];
      break;
    case 'git':
      icon = ['fab', 'git'];
      break;
    case 'git-commands':
      icon = ['far', 'code-commit'];
      icon = ['far', 'code-branch'];
      break;
    default:
      icon = ['far', 'atom-alt'];
  }

  return icon;
};

/**
 * Slugify a string in order
 * @param text
 * @returns {string}
 */
export const slugify = text => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
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

/**
 * Clean urls that are internal
 * @param link
 * @returns {string}
 */
export const sanitizeUrl = link => {
  if (link) {
    return (
      link
        .toLowerCase()
        .replace(/(^\w+:|^)\/\//, '')
        // .replace('/', '')
        // .replace(/\//g, '')
        // .replace('http', '')
        // .replace('https', '')
        // .replace(':', '')
        .replace(process.env.GATSBY_API_URL, '')
    );
  }

  return link;
};
