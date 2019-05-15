import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Row.module.scss';

const Row = ({ children, row, column, reverse, classes, ...props }) => {
  // console.log(classes);
  return (
    <div
      data-test="component-grid-row"
      {...props}
      className={classNames([
        classes,
        {
          [styles.row]: row,
          'row--reverse': row && reverse && !column,
          'row--column': column && !reverse,
          'row--column-reverse': column && reverse && !row,
        },
      ])}
    >
      {children}
    </div>
  );
};

Row.defaultProps = {
  row: true,
  column: false,
  reverse: false,
  classes: null,
};

Row.propTypes = {
  classes: PropTypes.string,
  row: PropTypes.bool,
  column: PropTypes.bool,
  reverse: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Row;
