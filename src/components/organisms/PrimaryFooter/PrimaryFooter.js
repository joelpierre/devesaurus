import React from 'react';
import * as styles from './PrimaryFooter.module.scss';

function PrimaryFooter() {
  return (
    <footer className={styles['primary-footer']}>
      <div className="container-fluid">
        <div className="row">
          <div className="flex">
            <h6 className={styles['primary-footer__legal']}>
              &copy; Devesaurus {new Date().getFullYear()} | Built by: Joel Pierre-Powell
            </h6>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default PrimaryFooter;
