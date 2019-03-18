import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import * as styles from './MenuItem.module.scss';

function MenuItem({ item, classes }) {

  return (
    <li className={`${classes} ${styles['menu-item']}`}>
      <Link className={styles['menu-item__link']} to={`/` + item.object_slug} key={item.title}>
        {item.title}
      </Link>
    </li>
  );
}

MenuItem.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  classes: PropTypes.string.isRequired,
};

export default MenuItem;
