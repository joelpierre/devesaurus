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
  children,
  behavior,
  theme,
  link,
  size,
  caps,
  className,
  type,
  ...props
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
            className,
          ])}
          {...props}
        >
          {children}
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
            className,
          ])}
          target="_blank"
          rel="noopener noreferrer nofollow"
          {...props}
        >
          {children}
        </a>
      );
      break;

    case 'action':
      button = (
        // eslint-disable-next-line react/button-has-type
        <button
          data-test="component-button"
          type={type || 'button'}
          className={classNames([
            styles.btn,
            styles[`btn--${size}`],
            styles[`btn--${theme}`],
            {
              [styles[`btn--capitalise`]]: caps,
            },
            className,
          ])}
          {...props}
        >
          {children}
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
  action: undefined,
  className: undefined,
  type: 'button',
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  link: PropTypes.string,
  className: PropTypes.string,
  caps: PropTypes.bool,
  ...themePropType,
  ...sizePropType,
  behavior: PropTypes.oneOf(['router', 'anchor', 'action']),
};

export default Button;
