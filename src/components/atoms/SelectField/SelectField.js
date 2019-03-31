import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './SelectField.scss';

const SelectField = ({ name, placeholder, options }) => {
  return (
    <div data-test="component-select-field" className={styles.selectWrapper}>
      <select name={name} placeholder={placeholder}>
        {options.map((option) => {
          return <option value={option.value}>{option.name}</option>;
        })}
      </select>
    </div>
  );
};

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape(
      {
        name: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
      },
    ),
  ).isRequired,
};

export default SelectField;
