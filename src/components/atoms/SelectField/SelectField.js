import React from 'react';
import PropTypes from 'prop-types';
import styles from './SelectField.module.scss';
import Label from '../Label/Label';

const SelectField = ({ name, placeholder, options, label }) => {
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
