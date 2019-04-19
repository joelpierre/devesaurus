import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Button.module.scss';

const Button = ({ text, behavior, theme, link, size, action }) => {
  let button;
  switch (behavior) {
    case 'router':
      button = (
        <Link
          data-test="component-button"
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
          data-test="component-button"
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
          data-test="component-button"
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
    'tint-alpha',
    'tint-beta',
    'tint-psi',
    'tint-omega',
  ]),
  behavior: PropTypes.oneOf(['router', 'anchor', 'action']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'full']),
};

export default Button;
