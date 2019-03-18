import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Brand.module.scss';

function Brand({
  classes, heading, slogan, logo,
}) {
  return (
    <div className={`${classes}`}>
      <div className={`${styles.brand}`}>

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
}

Brand.defaultProps = {
  classes: '',
  heading: '',
  slogan: '',
  logo: '',
};

Brand.propTypes = {
  classes: PropTypes.string,
  heading: PropTypes.string,
  slogan: PropTypes.string,
  logo: PropTypes.string,
};

export default Brand;
