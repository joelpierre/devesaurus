import React from 'react';
import * as styles from './PrimaryFooter.module.scss';

function PrimaryFooter() {
  return (
    <footer className={styles['primary-footer']}>
      <div className="container-fluid">
        <div className="row">
          <div className="flex">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi delectus ea eum, excepturi neque optio
              possimus sunt suscipit. Cumque cupiditate doloremque eius illum omnis optio porro tempora tenetur, unde
              voluptate!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default PrimaryFooter;
