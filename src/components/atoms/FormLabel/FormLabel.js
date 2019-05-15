import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormLabel.module.scss';

const FormLabel = ({ text, name }) => {
  return (
    <label
      id={name}
      data-test="component-label"
      htmlFor={name}
      aria-label={`Label for ${name}`}
      className={styles.form__label}
    >
      {text}
    </label>
  );
};

FormLabel.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FormLabel;
