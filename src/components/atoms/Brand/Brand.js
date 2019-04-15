import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Brand.module.scss';
import SvgIcon from '../SvgIcon/SvgIcon';

const Brand = ({ classes, heading, slogan, type }) => {
  let logo;

  /**
   * Switch statement to determine what brand logo is used
   */
  switch (type) {
    case 'text':
    case 'text-alt':
    case 'symbol':
    case 'symbol-alt':
      logo = `logo-${type}`;
      break;
    default:
      logo = 'logo';
  }

  return (
    <div
      data-test="component-brand"
      className={classNames([styles.brand, classes])}
    >
      <div className={classNames(styles.brand__wrapper)}>
        <SvgIcon
          name={logo}
          classes={classNames([
            `${styles.brand__logo}`,
            `${styles.brand__icon}`,
          ])}
        />

        <div className={`${styles.brand__company}`}>
          {heading && <h1 className={styles.brand__heading}>{heading}</h1>}
          {slogan && <p className={styles.brand__slogan}>{slogan}</p>}
        </div>
      </div>
    </div>
  );
};

Brand.defaultProps = {
  classes: null,
  heading: null,
  slogan: null,
  type: 'logo',
};

Brand.propTypes = {
  classes: PropTypes.string,
  heading: PropTypes.string,
  slogan: PropTypes.string,
  type: PropTypes.oneOf(['logo', 'text', 'text-alt', 'symbol', 'symbol-alt']),
};

export default Brand;
