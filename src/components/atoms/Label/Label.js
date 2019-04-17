import React from 'react';
import PropTypes from 'prop-types';
import styles from './Label.module.scss';

const Label = ({ text, name }) => {
  return (
    <label
      data-test="component-label"
      htmlFor={name}
      aria-label={`Label for ${name}`}
      className={styles.form__label}
    >
      {text}
    </label>
  );
};

Label.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Label;
