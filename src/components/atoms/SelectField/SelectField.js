import React from 'react';
import PropTypes from 'prop-types';
import styles from './SelectField.module.scss';
import Label from '../FormLabel/FormLabel';

const SelectField = ({ name, placeholder, options, label, ...props }) => {
  return (
    <>
      {label && <Label text={label} name={name} />}
      <div
        data-test="component-select-field"
        className={styles['select-field']}
      >
        <select
          className={styles['select-field__select']}
          name={name}
          placeholder={placeholder}
          {...props}
        >
          {options.map((option, index) => {
            return (
              <option key={index} value={option.value}>
                {option.name}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

SelectField.defaultProps = {
  placeholder: null,
  label: null,
};

SelectField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SelectField;
