import React from 'react';
import * as styles from './PrimaryFooter.module.scss';

const PrimaryFooter = ({ company }) => {
  return (
    <footer data-test="component-primary-footer" className={styles['primary-footer']}>
      <div className="container-fluid">
        <div className="row">
          <div className="flex">
            <h6 className={styles['primary-footer__legal']}>
              {`&copy; ${company} ${new Date().getFullYear()} | Built by: Joel Pierre-Powell`}
            </h6>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PrimaryFooter;
