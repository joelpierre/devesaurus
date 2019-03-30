import React from 'react';
import * as styles from './PrimaryHeader.module.scss';
import Brand from '../../atoms/Brand/Brand';
import PrimaryMenu from '../../molecules/PrimaryMenu/PrimaryMenu';
import SiteInfo from '../../../utils/siteInfo';

const Header = () => (
  <header className={styles['primary-header']}>

    <div className={styles['primary-header__wrapper']}>
      <Brand type="logo" classes={styles['primary-header__brand']}/>

      <PrimaryMenu classes={styles['primary-header__menu']}/>
    </div>

  </header>
);

export default Header;
