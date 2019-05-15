import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './FormField.module.scss';

const FormField = ({ classes, children }) => {
  return (
    <div
      data-test="component-form-field"
      className={classNames([styles['form-field'], classes])}
    >
      {children}
    </div>
  );
};

FormField.defaultProps = {
  classes: null,
};

FormField.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default FormField;
