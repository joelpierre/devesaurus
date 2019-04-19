import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Flex.module.scss';

const Flex = ({
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
    [classes]: classes,
  };

  return (
    <Tag data-test="component-flex" className={classNames(mergeClasses)}>
      {children}
    </Tag>
  );
};

Flex.defaultProps = {
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
};

Flex.propTypes = {
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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Flex;
