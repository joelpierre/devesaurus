import React from 'react';
import classNames from 'classnames';

import styles from './SimpleHeader.module.scss';
import PrimaryMenu from '../../molecules/PrimaryMenu/PrimaryMenu';

const SimpleHeader = () => {
  return (
    <header
      className={classNames([styles['simple-header']])}
      data-test="component-simple-header"
    >
      <PrimaryMenu classes={styles['simple-header__menu']} />
    </header>
  );
};

export default SimpleHeader;
