import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Brand.module.scss';
import SvgIcon from '../SvgIcon/SvgIcon';
import SiteInfo from '../SiteInfo/SiteInfo';

const Brand = ({ className, type, left, right, center, ...props }) => {
  let logo;

  /**
   * Switch statement to determine what brand logo is used
   */
  switch (type) {
    case 'logo-inv':
      logo = type;
      break;
    case 'text':
    case 'text-inv':
    case 'character':
    case 'character-inv':
    case 'symbol':
    case 'symbol-inv':
    case 'social-inv':
    case 'social':
      logo = `logo-${type}`;
      break;
    default:
      logo = 'logo';
  }

  return (
    <div
      data-test="component-brand"
      className={classNames([
        styles.brand,
        {
          [styles['brand--left']]: left && center === false && right === false,
          [styles['brand--right']]: right,
          [styles['brand--center']]: center,
        },
        className,
      ])}
      {...props}
    >
      <div className={classNames(styles.brand__wrapper)}>
        <SvgIcon
          name={logo}
          className={classNames([
            `${styles.brand__logo}`,
            `${styles.brand__icon}`,
          ])}
        />

        <SiteInfo />
      </div>
    </div>
  );
};

Brand.defaultProps = {
  className: null,
  left: true,
  center: false,
  right: false,
  type: 'logo',
};

Brand.propTypes = {
  className: PropTypes.string,
  left: PropTypes.bool,
  center: PropTypes.bool,
  right: PropTypes.bool,
  type: PropTypes.oneOf([
    'logo',
    'logo-inv',
    'text',
    'text-inv',
    'character',
    'character-inv',
    'symbol',
    'symbol-inv',
    'social-inv',
    'social',
  ]),
};

export default Brand;
