import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './InputField.module.scss';
import Label from '../Label/Label';

const InputField = ({
  name,
  label,
  type,
  placeholder,
  disabled,
  readonly,
  min,
  max,
  sm,
  md,
  lg,
  defaultValue,
  hidden,
  onChange,
  onBlur,
  onFocus,
  onClick,
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
          className={classNames({
            [styles['input-field']]: true,
            [styles['input-field--sm']]: sm,
            [styles['input-field--md']]: md,
            [styles['input-field--lg']]: lg,
          })}
          type={type}
          name={name}
          placeholder={placeholder}
          readOnly={readonly}
          disabled={disabled}
          defaultValue={defaultValue}
          aria-label={`Input for ${name}`}
          hidden={hidden}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          onClick={onClick}
        />
      );
      break;
    case 'number':
      inputField = (
        <input
          data-test="component-input-field"
          className={classNames({
            [styles['input-field']]: true,
            [styles['input-field--sm']]: sm,
            [styles['input-field--md']]: md,
            [styles['input-field--lg']]: lg,
          })}
          type={type}
          name={name}
          minLength={min}
          maxLength={max}
          placeholder={placeholder}
          readOnly={readonly}
          disabled={disabled}
          defaultValue={defaultValue}
          aria-label={`Input for ${name}`}
          hidden={hidden}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          onClick={onClick}
        />
      );
      break;
    default:
      inputField = (
        <input
          data-test="component-input-field"
          className={classNames({
            [styles['input-field']]: true,
            [styles['input-field--sm']]: sm,
            [styles['input-field--md']]: md,
            [styles['input-field--lg']]: lg,
          })}
          type="text"
          name={name}
          placeholder={placeholder}
          readOnly={readonly}
          disabled={disabled}
          defaultValue={defaultValue}
          aria-label={`Input for ${name}`}
          hidden={hidden}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          onClick={onClick}
        />
      );
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
  readonly: false,
  min: null,
  max: null,
  sm: false,
  md: false,
  lg: false,
  label: null,
  defaultValue: '',
  hidden: null,
  onChange: null,
  onBlur: null,
  onFocus: null,
  onClick: null,
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.oneOf([
    'text',
    'file',
    'select',
    'password',
    'date',
    'email',
    'number',
  ]).isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  min: PropTypes.string,
  max: PropTypes.number,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  hidden: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onClick: PropTypes.func,
};

export default InputField;
