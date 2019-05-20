import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Flex.module.scss';
import { columnShape } from '../../../utils/propTypes';

const Flex = ({
  children,
  auto,
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
  ...props
}) => {
  const Tag = `${type}`;

  return (
    <Tag
      data-test="component-flex"
      {...props}
      className={classNames([
        classes,
        {
          [styles.flex]: !col,
          [styles['flex--auto']]: auto,
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
        },
      ])}
    >
      {children}
    </Tag>
  );
};

Flex.defaultProps = {
  classes: undefined,
  type: 'div',
  auto: false,
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
  col: undefined,
  colXs: undefined,
  colSm: undefined,
  colMd: undefined,
  colLg: undefined,
  colXl: undefined,
};

Flex.propTypes = {
  type: PropTypes.string,
  auto: PropTypes.bool,
  col: columnShape,
  xs: PropTypes.bool,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  xl: PropTypes.bool,
  colXs: columnShape,
  colSm: columnShape,
  colMd: columnShape,
  colLg: columnShape,
  colXl: columnShape,
  classes: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Flex;
