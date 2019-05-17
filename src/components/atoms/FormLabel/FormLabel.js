import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './FormLabel.module.scss';

const FormLabel = ({ text, name, size }) => {
  return (
    <label
      id={name}
      data-test="component-label"
      htmlFor={name}
      aria-label={`Label for ${name}`}
      className={classNames(styles.form__label, styles[`form__label--${size}`])}
    >
      {text}
    </label>
  );
};

FormLabel.defaultProps = {
  size: 'md',
};

FormLabel.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FormLabel;
