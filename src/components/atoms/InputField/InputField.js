import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './InputField.module.scss';
import Label from '../FormLabel/FormLabel';

const InputField = ({
  className,
  name,
  label,
  type,
  placeholder,
  disabled,
  min,
  max,
  sm,
  md,
  lg,
  ...props
}) => {
  let inputField;
  switch (type) {
    case 'text':
    case 'email':
    case 'password':
    case 'date':
      inputField = (
        <input
          data-test="component-input-field"
          className={classNames([
            styles['input-field'],
            {
              [styles['input-field--sm']]: sm,
              [styles['input-field--md']]: md,
              [styles['input-field--lg']]: lg,
            },
            className,
          ])}
          type={type}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          aria-label={`Input for ${name}`}
          {...props}
        />
      );
      break;
    case 'number':
      inputField = (
        <input
          data-test="component-input-field"
          className={classNames([
            className,
            {
              [styles['input-field']]: true,
              [styles['input-field--sm']]: sm,
              [styles['input-field--md']]: md,
              [styles['input-field--lg']]: lg,
            },
          ])}
          type={type}
          name={name}
          minLength={min}
          maxLength={max}
          placeholder={placeholder}
          disabled={disabled}
          aria-label={`Input for ${name}`}
          {...props}
        />
      );
      break;
  }
  return (
    <>
      {label && <Label text={label} name={name} />}
      {inputField}
    </>
  );
};

InputField.defaultProps = {
  placeholder: '',
  disabled: false,
  className: null,
  min: null,
  max: null,
  sm: false,
  md: false,
  lg: false,
  label: null,
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'date', 'email', 'number'])
    .isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  min: PropTypes.string,
  max: PropTypes.number,
};

export default InputField;
