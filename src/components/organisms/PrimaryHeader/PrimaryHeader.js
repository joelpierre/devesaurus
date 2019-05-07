import React from 'react';
import { Link } from 'gatsby';
import * as styles from './PrimaryHeader.module.scss';
import Brand from '../../atoms/Brand/Brand';
import PrimaryMenu from '../../molecules/PrimaryMenu/PrimaryMenu';

const PrimaryHeader = () => (
  <header
    data-test="component-primary-header"
    className={styles['primary-header']}
  >
    <div className={styles['primary-header__wrapper']}>
      <Link to="/">
        <Brand type="symbol" left classes={styles['primary-header__brand']} />
      </Link>

      <PrimaryMenu classes={styles['primary-header__menu']} />
    </div>
  </header>
);

export default PrimaryHeader;
