import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import * as styles from './Button.scss';

const Button = (
  {
    text, behavior, theme, link, size,
  },
) => {
  let button;

  switch (behavior) {
    case 'router':
      button = (
        <Link
          to={link}
          className={`btn btn--${size} ${styles[`btn--${theme}`]} ${styles.btn}`}
        >
          {text}
        </Link>
      );
      break;

    case 'anchor':
      button = (
        <a
          href={link}
          className={`btn btn--${size} ${styles[`btn--${theme}`]} ${styles.btn}`}
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          {text}
        </a>
      );
      break;

    default:
      button = (
        <Link
          to={link}
          className={`btn btn--${size} ${styles[`btn--${theme}`]} ${styles.btn}`}
        >
          {text}
        </Link>
      );
      break;
  }

  return (
    <>
      {button}
    </>
  );
};

Button.defaultProps = {
  theme: 'brand',
  behavior: 'router',
  size: 'md',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['brand', 'alpha', 'beta', 'tint-alpha', 'tint-beta', 'tint-omega', 'tint-gamma', 'tint-psi']),
  behavior: PropTypes.oneOf(['router', 'anchor']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'full']),
};

export default Button;
