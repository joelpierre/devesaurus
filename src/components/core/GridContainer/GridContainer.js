import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const GridContainer = ({ full, children }) => (
  <div
    data-test="component-grid-container"
    className={classNames({
      container: !full,
      'container-fluid': full,
    })}
  >
    {children}
  </div>
);

GridContainer.defaultProps = {
  full: false,
};

GridContainer.propTypes = {
  full: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default GridContainer;
