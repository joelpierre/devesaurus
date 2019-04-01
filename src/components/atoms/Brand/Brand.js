import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './Brand.module.scss';
import SvgIcon from '../SvgIcon/SvgIcon';

const Brand = (
  {
    classes, heading, slogan, type,
  },
) => {
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
    <div data-test="component-brand" className={`${classes}`}>
      <div className={`${styles.brand}`}>
        <SvgIcon name={logo} classes="brand__icon brand__logo"/>

        <div className={`${styles.brand__company}`}>
          <h1 className={styles.brand__heading}>
            {heading}
          </h1>
          <p className={styles.brand__slogan}>
            {slogan}
          </p>
        </div>
      </div>
    </div>
  );
};

Brand.defaultProps = {
  classes: '',
  heading: '',
  slogan: '',
  type: 'logo',
};

Brand.propTypes = {
  classes: PropTypes.string,
  heading: PropTypes.string,
  slogan: PropTypes.string,
  type: PropTypes.oneOf(['logo', 'text', 'text-alt', 'symbol', 'symbol-alt']),
};

export default Brand;
