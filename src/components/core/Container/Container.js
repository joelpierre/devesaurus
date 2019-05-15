import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Container.module.scss';

const Container = ({ fluid, children, classes, ...props }) => (
  <div
    data-test="component-grid-container"
    className={classNames({
      [styles.container]: !fluid,
      [styles['container-fluid']]: fluid,
      classes,
    })}
    {...props}
  >
    {children}
  </div>
);

Container.defaultProps = {
  fluid: false,
  classes: null,
};

Container.propTypes = {
  fluid: PropTypes.bool,
  classes: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Container;
