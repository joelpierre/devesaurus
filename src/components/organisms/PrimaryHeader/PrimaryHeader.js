import React from 'react';
import { Link } from 'gatsby';
import * as styles from './PrimaryHeader.module.scss';
import Brand from '../../atoms/Brand/Brand';
import PrimaryMenu from '../../molecules/PrimaryMenu/PrimaryMenu';

const Header = () => (
  <header className={styles['primary-header']}>

    <div className={styles['primary-header__wrapper']}>

      <Link to="/">
        <Brand type="logo" classes={styles['primary-header__brand']}/>
      </Link>

      <PrimaryMenu classes={styles['primary-header__menu']}/>
    </div>

  </header>
);

export default Header;
