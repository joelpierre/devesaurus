import React, { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Hamburger.module.scss';
import { defaultTheme, themePropType } from '../../../utils/propTypes';

const Hamburger = ({
  descriptor,
  alt,
  className,
  theme,
  isMenuOpen,
  onClick,
}) => {
  return (
    <button
      type="button"
      data-test="component-hamburger"
      className={classNames(
        styles.hamburger,
        {
          [styles['hamburger--alt']]: alt,
          [styles['hamburger--active']]: isMenuOpen,
        },
        className
      )}
      onClick={onClick}
    >
      <span
        className={classNames(
          styles.hamburger__line,
          styles[`hamburger__line-theme--${theme}`]
        )}
      />
      <span
        className={classNames(
          styles.hamburger__line,
          styles[`hamburger__line-theme--${theme}`]
        )}
      />
      <span
        className={classNames(
          styles.hamburger__line,
          styles[`hamburger__line-theme--${theme}`]
        )}
      />
      <span className={styles.hamburger__descriptor}>{descriptor}</span>
    </button>
  );
};

Hamburger.defaultProps = {
  isMenuOpen: false,
  alt: false,
  className: undefined,
  ...defaultTheme(),
};

Hamburger.propTypes = {
  ...themePropType,
  onClick: PropTypes.func,
  alt: PropTypes.bool,
  isMenuOpen: PropTypes.bool,
  className: PropTypes.string,
  descriptor: PropTypes.string.isRequired,
};

export default memo(Hamburger);
