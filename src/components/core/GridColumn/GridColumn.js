import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './GridColumn.module.scss';

const GridColumn = ({
  children,
  type,
  classes,
  xs,
  sm,
  md,
  lg,
  xl,
  col,
  colXs,
  colSm,
  colMd,
  colLg,
  colXl,
  center,
  centerXs,
  centerSm,
  centerMd,
  centerLg,
  centerXl,
  left,
  leftXs,
  leftSm,
  leftMd,
  leftLg,
  leftXl,
  right,
  rightXs,
  rightSm,
  rightMd,
  rightLg,
  rightXl,
}) => {
  const Tag = `${type}`;
  const mergeClasses = {
    [styles.flex]: !col,
    [styles['flex-xs']]: xs,
    [styles['flex-sm']]: sm,
    [styles['flex-md']]: md,
    [styles['flex-lg']]: lg,
    [styles['flex-xl']]: xl,
    [styles[`flex-${col}`]]: col,
    [styles[`flex-xs-${colXs}`]]: colXs,
    [styles[`flex-sm-${colSm}`]]: colSm,
    [styles[`flex-md-${colMd}`]]: colMd,
    [styles[`flex-lg-${colLg}`]]: colLg,
    [styles[`flex-xl-${colXl}`]]: colXl,
    [styles[`mx-auto`]]: center,
    [styles[`mx-xs-auto`]]: centerXs,
    [styles[`mx-sm-auto`]]: centerSm,
    [styles[`mx-md-auto`]]: centerMd,
    [styles[`mx-lg-auto`]]: centerLg,
    [styles[`mx-xl-auto`]]: centerXl,
    [styles[`ml-auto`]]: left,
    [styles[`ml-xs-auto`]]: leftXs,
    [styles[`ml-sm-auto`]]: leftSm,
    [styles[`ml-md-auto`]]: leftMd,
    [styles[`ml-lg-auto`]]: leftLg,
    [styles[`ml-xl-auto`]]: leftXl,
    [styles[`mr-auto`]]: right,
    [styles[`mr-xs-auto`]]: rightXs,
    [styles[`mr-sm-auto`]]: rightSm,
    [styles[`mr-md-auto`]]: rightMd,
    [styles[`mr-lg-auto`]]: rightLg,
    [styles[`mr-xl-auto`]]: rightXl,
    [classes]: classes,
  };

  return (
    <Tag data-test="component-grid-column" className={classNames(mergeClasses)}>
      {children}
    </Tag>
  );
};

GridColumn.defaultProps = {
  classes: null,
  type: 'div',
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
  col: null,
  colXs: null,
  colSm: null,
  colMd: null,
  colLg: null,
  colXl: null,
  center: false,
  centerXs: false,
  centerSm: false,
  centerMd: false,
  centerLg: false,
  centerXl: false,
  left: false,
  leftXs: false,
  leftSm: false,
  leftMd: false,
  leftLg: false,
  leftXl: false,
  right: false,
  rightXs: false,
  rightSm: false,
  rightMd: false,
  rightLg: false,
  rightXl: false,
};

GridColumn.propTypes = {
  type: PropTypes.string,
  col: PropTypes.string,
  xs: PropTypes.bool,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  xl: PropTypes.bool,
  colXs: PropTypes.string,
  colSm: PropTypes.string,
  colMd: PropTypes.string,
  colLg: PropTypes.string,
  colXl: PropTypes.string,
  classes: PropTypes.string,
  center: PropTypes.bool,
  centerXs: PropTypes.bool,
  centerSm: PropTypes.bool,
  centerMd: PropTypes.bool,
  centerLg: PropTypes.bool,
  centerXl: PropTypes.bool,
  left: PropTypes.bool,
  leftXs: PropTypes.bool,
  leftSm: PropTypes.bool,
  leftMd: PropTypes.bool,
  leftLg: PropTypes.bool,
  leftXl: PropTypes.bool,
  right: PropTypes.bool,
  rightXs: PropTypes.bool,
  rightSm: PropTypes.bool,
  rightMd: PropTypes.bool,
  rightLg: PropTypes.bool,
  rightXl: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default GridColumn;
