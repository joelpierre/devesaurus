import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './GridRow.module.scss';

const GridRow = ({ children, row, column, reverse }) => {
  const classes = {
    [styles.row]: row,
    'row--reverse': row && reverse && !column,
    'row--column': column && !reverse,
    'row--column-reverse': column && reverse && !row,
  };

  return (
    <div data-test="component-grid-row" className={classNames(classes)}>
      {children}
    </div>
  );
};

GridRow.defaultProps = {
  row: true,
  column: false,
  reverse: false,
};

GridRow.propTypes = {
  row: PropTypes.bool,
  column: PropTypes.bool,
  reverse: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default GridRow;
