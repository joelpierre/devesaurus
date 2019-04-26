import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'gatsby';
import styles from './Label.module.scss';
import {
  defaultSize,
  defaultTheme,
  sizePropType,
  themePropType,
} from '../../../utils/propTypes';

const Label = ({ text, link, theme, size, caps, classes }) => {
  const label = link ? (
    <Link
      data-test="component-label"
      to={link}
      className={classNames([
        styles.label,
        styles[`label--${theme}`],
        styles[`label--${size}`],
        { [styles[`label--capitalise`]]: caps },
        classes,
      ])}
    >
      <span className={classNames(styles.label__text)}>{text}</span>
    </Link>
  ) : (
    <span
      data-test="component-label"
      className={classNames([
        styles.label,
        styles[`label--${theme}`],
        styles[`label--${size}`],
        { [styles[`label--capitalise`]]: caps },
        classes,
      ])}
    >
      <span className={classNames(styles.label__text)}>{text}</span>
    </span>
  );

  return <>{label}</>;
};

Label.defaultProps = {
  link: null,
  caps: false,
  classes: null,
  ...defaultSize('sm'),
  ...defaultTheme('alpha'),
};

Label.propTypes = {
  link: PropTypes.string,
  classes: PropTypes.string,
  caps: PropTypes.bool,
  text: PropTypes.string.isRequired,
  ...sizePropType,
  ...themePropType,
};

export default Label;
