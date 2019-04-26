import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Button.module.scss';
import {
  defaultSize,
  defaultTheme,
  sizePropType,
  themePropType,
} from '../../../utils/propTypes';

const Button = ({
  text,
  behavior,
  theme,
  link,
  size,
  action,
  caps,
  classes,
}) => {
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
            {
              [styles[`btn--capitalise`]]: caps,
            },
            classes,
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
            {
              [styles[`btn--capitalise`]]: caps,
            },
            classes,
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
            {
              [styles[`btn--capitalise`]]: caps,
            },
            classes,
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
  ...defaultTheme('tint-omega'),
  ...defaultSize('md'),
  caps: false,
  behavior: 'router',
  action: null,
  classes: null,
};

Button.propTypes = {
  action: PropTypes.func,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  classes: PropTypes.string,
  caps: PropTypes.bool,
  ...themePropType,
  ...sizePropType,
  behavior: PropTypes.oneOf(['router', 'anchor', 'action']),
};

export default Button;
