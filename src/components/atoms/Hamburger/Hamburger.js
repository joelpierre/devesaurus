import React, { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Hamburger.module.scss';
import { defaultTheme, themePropType } from '../../../utils/propTypes';

const Hamburger = ({
  descriptor,
  alt,
  classes,
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
        classes
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
  classes: undefined,
  ...defaultTheme(),
};

Hamburger.propTypes = {
  ...themePropType,
  onClick: PropTypes.func,
  alt: PropTypes.bool,
  isMenuOpen: PropTypes.bool,
  classes: PropTypes.string,
  descriptor: PropTypes.string.isRequired,
};

export default memo(Hamburger);
