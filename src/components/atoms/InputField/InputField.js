import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './InputField.scss';

const InputField = (
  {
    name, type, placeholder, disabled, readonly, min, max,
  },
) => {
  let inputField;

  switch (type) {
    case 'text':
    case 'email':
    case 'password':
    case 'date':
      inputField = (
        <input
          data-test="component-input-field"
          className="form-control"
          type={type}
          name={name}
          placeholder={placeholder}
          readOnly={readonly}
          disabled={disabled}
        />
      );
      break;
    case 'number':
      inputField = (
        <input
          data-test="component-input-field"
          className="form-control"
          type={type}
          name={name}
          minLength={min}
          maxLength={max}
          placeholder={placeholder}
          readOnly={readonly}
          disabled={disabled}
        />
      );
      break;
    default:
      inputField = (
        <input
          data-test="component-input-field"
          className={styles.formControl}
          type="text"
          name={name}
          placeholder={placeholder}
          readOnly={readonly}
          disabled={disabled}
        />
      );
  }
  return (
    <>
      {inputField}
    </>
  );
};

InputField.defaultProps = {
  placeholder: '',
  disabled: false,
  readonly: false,
  min: null,
  max: null,
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(
    ['text', 'file', 'select', 'password', 'date', 'email', 'number'],
  ).isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  min: PropTypes.string,
  max: PropTypes.number,
};

export default InputField;
