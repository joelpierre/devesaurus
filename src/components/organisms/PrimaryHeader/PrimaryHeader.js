import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import * as styles from './PrimaryHeader.module.scss';
import Brand from '../../atoms/Brand/Brand';
import PrimaryMenu from '../../molecules/PrimaryMenu/PrimaryMenu';
import Heading from '../../core/Heading/Heading';

const PrimaryHeader = ({ title }) => (
  <header
    data-test="component-primary-header"
    className={styles['primary-header']}
  >
    <div className={styles['primary-header__wrapper']}>
      <Link to="/">
        <Brand type="symbol" left classes={styles['primary-header__brand']} />
      </Link>

      {title && (
        <div className={styles['primary-header__title']}>
          <Heading priority={1} classes={styles['primary-header__title-text']}>
            {title}
          </Heading>
        </div>
      )}

      <PrimaryMenu classes={styles['primary-header__menu']} />
    </div>
  </header>
);

PrimaryHeader.defaultProps = {
  title: undefined,
};

PrimaryHeader.propTypes = {
  title: PropTypes.string,
};

export default PrimaryHeader;
