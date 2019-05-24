import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './ScrollingMouse.module.scss';
import { defaultTheme, themePropType } from '../../../utils/propTypes';

const ScrollingMouse = ({ className, theme }) => {
  return (
    <div
      data-test="component-scrolling-mouse"
      className={classNames(styles['mouse-wrapper'], className)}
    >
      <div
        className={classNames(
          styles.mouse,
          className,
          styles[`mouse--border--${theme}`]
        )}
      >
        <div
          className={classNames(
            styles['mouse__scroll-wheel'],
            styles[`mouse--theme--${theme}`]
          )}
        />
      </div>
    </div>
  );
};

ScrollingMouse.defaultProps = {
  className: undefined,
  ...defaultTheme(),
};

ScrollingMouse.propTypes = {
  className: PropTypes.string,
  ...themePropType,
};

export default ScrollingMouse;
