import React from 'react';
import * as styles from './PrimaryHeader.module.scss';
import Brand from '../../atoms/Brand/Brand';
import PrimaryMenu from '../../molecules/PrimaryMenu/PrimaryMenu';
import SiteInfo from '../../../hoc/siteInfo';

const Header = () => (
  <header className={styles['primary-header']}>
    <div className="container-fluid">
      <div className="row">
        <div className="flex">

          <div className={styles['primary-header__wrapper']}>
            <Brand classes={styles['primary-header__brand']}/>
            <PrimaryMenu classes={styles['primary-header__menu']}/>
          </div>

        </div>
      </div>
    </div>
  </header>
);

export default Header;
