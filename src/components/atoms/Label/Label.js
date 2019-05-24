import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Label.module.scss';
import {
  defaultSize,
  defaultTheme,
  sizePropType,
  themePropType,
} from '../../../utils/propTypes';
import { mapTaxonomyIcon } from '../../../utils';

const Label = ({ children, link, theme, size, caps, className }) => {
  const label = link ? (
    <Link
      data-test="component-label"
      to={link}
      className={classNames([
        styles.label,
        styles[`label--${theme}`],
        styles[`label--${size}`],
        { [styles[`label--capitalise`]]: caps },
        className,
      ])}
    >
      <span className={classNames(styles.label__text)}>{children}</span>
    </Link>
  ) : (
    <span
      data-test="component-label"
      className={classNames([
        styles.label,
        styles[`label--${theme}`],
        styles[`label--${size}`],
        { [styles[`label--capitalise`]]: caps },
        className,
      ])}
    >
      <span className={classNames(styles.label__text)}>{children}</span>
    </span>
  );

  return <>{label}</>;
};

Label.defaultProps = {
  link: null,
  caps: false,
  className: null,
  ...defaultSize('sm'),
  ...defaultTheme('alpha'),
};

Label.propTypes = {
  link: PropTypes.string,
  className: PropTypes.string,
  caps: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  ...sizePropType,
  ...themePropType,
};

export default Label;
