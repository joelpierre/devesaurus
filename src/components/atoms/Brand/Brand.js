import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Brand.module.scss';
import SvgIcon from '../SvgIcon/SvgIcon';
import SiteInfo from '../SiteInfo/SiteInfo';

const Brand = ({ classes, heading, slogan, type }) => {
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

        <SiteInfo />
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
