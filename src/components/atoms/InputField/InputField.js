import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './InputField.scss';
import FileUpload from '../FileUpload/FileUpload';

const InputField = (
  {
    name, type, placeholder, disabled, readonly, options, min, max,
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
          data-test="component-test"
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
          data-test="component-test"
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
    case 'select':
      inputField = (
        <div data-test="component-test" className="form-control form-control--select">
          <select {...name} {...placeholder}>
            {options.map((option) => {
              return <option value={option.value}>{option.name}</option>;
            })}
          </select>
        </div>
      );
      break;
    case 'file':
      inputField = (<FileUpload placeholder={placeholder} name={name}/>);
      break;
    default:
      inputField = (
        <input
          data-test="component-test"
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
  options: null,
  min: null,
  max: null,
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape(
      {
        name: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
      },
    ),
  ),
  min: PropTypes.string,
  max: PropTypes.number,
};

export default InputField;
