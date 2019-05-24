import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './FormField.module.scss';

const FormField = ({ className, children }) => {
  return (
    <div
      data-test="component-form-field"
      className={classNames([styles['form-field'], className])}
    >
      {children}
    </div>
  );
};

FormField.defaultProps = {
  className: null,
};

FormField.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default FormField;
