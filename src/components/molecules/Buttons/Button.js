import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Button.module.scss';

const Button = ({ text, behavior, theme, link, size, action }) => {
  let button;

  switch (behavior) {
    case 'router':
      button = (
        <Link
          to={link}
          className={classNames([
            styles.btn,
            styles[`btn--${size}`],
            styles[`btn--${theme}`],
          ])}
        >
          {text}
        </Link>
      );
      break;

    case 'anchor':
      button = (
        <a
          href={link}
          className={classNames([
            styles.btn,
            styles[`btn--${size}`],
            styles[`btn--${theme}`],
          ])}
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          {text}
        </a>
      );
      break;

    case 'action':
      button = (
        <button
          type="button"
          className={classNames([
            styles.btn,
            styles[`btn--${size}`],
            styles[`btn--${theme}`],
          ])}
          onClick={action.func}
        >
          {text}
        </button>
      );
      break;

    default:
      button = (
        <Link
          to={link}
          className={classNames([
            styles.btn,
            styles[`btn--${size}`],
            styles[`btn--${theme}`],
          ])}
        >
          {text}
        </Link>
      );
      break;
  }

  return <>{button}</>;
};

Button.defaultProps = {
  theme: 'brand',
  behavior: 'router',
  size: 'md',
  action: null,
};

Button.propTypes = {
  action: PropTypes.func,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  theme: PropTypes.oneOf([
    'brand',
    'alpha',
    'beta',
    'tint-alpha',
    'tint-beta',
    'tint-omega',
    'tint-gamma',
    'tint-psi',
  ]),
  behavior: PropTypes.oneOf(['router', 'anchor', 'action']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'full']),
};

export default Button;
