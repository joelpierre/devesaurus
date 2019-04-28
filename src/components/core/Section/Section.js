import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Section.module.scss';
import { defaultTheme, themePropType } from '../../../utils/propTypes';

const Section = ({ children, classes, type, contrast, theme }) => {
  const Tag = `${type}`;

  return (
    <Tag
      data-test="component-section"
      className={classNames({
        [styles.section]: true,
        [classes]: classes,
        [styles[`theme--${theme}`]]: theme,
        [styles[`theme--tint-alpha`]]: !contrast && !theme,
        [styles[`theme--tint-beta`]]: contrast && !theme,
      })}
    >
      {children}
    </Tag>
  );
};

Section.defaultProps = {
  classes: null,
  type: 'section',
  contrast: false, // false = white, true = grey
  ...defaultTheme(null),
};

Section.propTypes = {
  classes: PropTypes.string,
  type: PropTypes.string,
  contrast: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  ...themePropType,
};

export default Section;
