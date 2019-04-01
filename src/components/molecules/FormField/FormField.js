import React from 'react';
import PropTypes from 'prop-types';

import InputField from '../../atoms/InputField/InputField';
import FileUpload from '../../atoms/FileUpload/FileUpload';
import SelectField from '../../atoms/SelectField/SelectField';

const FormField = (
  {
    name, type, placeholder, disabled, readonly, options, min, max,
  },
) => {
  let formField;

  switch (type) {
    case 'text':
    case 'email':
    case 'password':
    case 'date':
      formField = (
        <InputField
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
      formField = (
        <InputField
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
      formField = (
        <SelectField placeholder={placeholder} name={name} options={options}/>
      );
      break;
    case 'file':
      formField = (
        <FileUpload placeholder={placeholder} name={name}/>
      );
      break;
    default:
      formField = (
        <InputField
          className="form-control"
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
      {formField}
    </>
  );
};

FormField.defaultProps = {
  placeholder: null,
  disabled: false,
  readonly: false,
  options: null,
  min: null,
  max: null,
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(
    ['text', 'file', 'select', 'password', 'date', 'email', 'number'],
  ).isRequired,
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

export default FormField;
