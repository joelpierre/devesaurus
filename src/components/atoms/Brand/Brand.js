import React from 'react';
import { connect } from 'react-redux';
import * as styles from './Brand.module.scss';

function Brand({ classes, siteOptions }) {
  return (
    <div className={`${classes}`}>
      <div className={`${styles.brand}`}>
        <h1 className={styles.brand__heading}>
          {siteOptions.company_name}
        </h1>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  siteOptions: state.core.options,
});

export default connect(mapStateToProps)(Brand);
