import React from 'react';
import * as styles from './Brand.module.scss';
import SiteInfo from '../../../hoc/siteInfo';

function Brand({ classes }) {
  return (
    <div className={`${classes}`}>
      <div className={`${styles.brand}`}>
        <h1 className={styles.brand__heading}>
          <SiteInfo />
        </h1>
      </div>
    </div>
  );
}

export default Brand;
