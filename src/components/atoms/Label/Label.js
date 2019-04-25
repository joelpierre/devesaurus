import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'gatsby';
import styles from './Label.module.scss';
import { defaultTheme, themePropType } from '../../../utils/propTypes';

const Label = ({ text, link, theme }) => {
  const label = link ? (
    <Link
      data-test="component-label"
      to={link}
      className={classNames([styles.label, styles[`label--${theme}`]])}
    >
      <span className={classNames(styles.label__text)}>{text}</span>
    </Link>
  ) : (
    <span
      data-test="component-label"
      className={classNames([styles.label, styles[`label--${theme}`]])}
    >
      <span className={classNames(styles.label__text)}>{text}</span>
    </span>
  );

  return <>{label}</>;
};

Label.defaultProps = {
  link: null,
  ...defaultTheme,
};

Label.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string.isRequired,
  ...themePropType,
};

export default Label;
