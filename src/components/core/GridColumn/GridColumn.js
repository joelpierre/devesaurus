import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const GridColumn = ({ children, classes, type }) => {
  const Tag = `${type}`;

  return (
    <Tag data-test="component-grid-column" className={classNames(classes)}>
      {children}
    </Tag>
  );
};

GridColumn.defaultProps = {
  classes: null,
  type: 'div',
};

GridColumn.propTypes = {
  type: PropTypes.string,
  classes: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default GridColumn;
