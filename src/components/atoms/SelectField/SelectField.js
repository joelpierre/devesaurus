import React from 'react';
import PropTypes from 'prop-types';
import styles from './SelectField.module.scss';

const SelectField = ({ name, placeholder, options }) => {
  return (
    <div data-test="component-select-field" className={styles['select-field']}>
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
  );
};

SelectField.defaultProps = {
  placeholder: null,
};

SelectField.propTypes = {
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
