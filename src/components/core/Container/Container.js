import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Container.module.scss';

const Container = ({ fluid, children }) => (
  <div
    data-test="component-grid-container"
    className={classNames({
      [styles.container]: !fluid,
      [styles['container--fluid']]: fluid,
    })}
  >
    {children}
  </div>
);

Container.defaultProps = {
  fluid: false,
};

Container.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Container;
