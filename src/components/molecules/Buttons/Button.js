import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import * as styles from './Button.module.scss';

const Button = (
  {
    text, behavior, theme, link, size,
  },
) => {
  return (
    <>
      {behavior === 'router'
      && (
        <Link
          to={link}
          className={`btn btn--${size} ${styles[`btn--${theme}`]} ${styles.btn}`}
        >
          {text}
        </Link>
      )}

      {behavior === 'anchor'
      && (
        <a
          href={link}
          className={`btn btn--${size} ${styles[`btn--${theme}`]} ${styles.btn}`}
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          {text}
        </a>
      )}
    </>
  );
};

Button.defaultProps = {
  theme: 'brand',
  behavior: 'router',
  size: 'md',
};

Button.propTypes = {
  theme: PropTypes.string,
  behavior: PropTypes.oneOfType([
    PropTypes.oneOf(['router', 'anchor']),
  ]),
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'full']),
  ]),
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Button;
