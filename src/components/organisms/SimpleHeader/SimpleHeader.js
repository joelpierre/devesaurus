import React from 'react';
import classNames from 'classnames';

import styles from './SimpleHeader.module.scss';

const SimpleHeader = () => {
  return (
    <header
      className={classNames([styles['simple-header']])}
      data-test="component-simple-header"
    />
  );
};

export default SimpleHeader;
