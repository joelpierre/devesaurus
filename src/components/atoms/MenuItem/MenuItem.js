import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'gatsby';
import styles from './MenuItem.module.scss';

function MenuItem({ item, classes }) {
  return (
    <li
      data-test="component-menu-item"
      className={classNames(classes, styles['menu-item'])}
    >
      <Link
        className={styles['menu-item__link']}
        to={`/` + item.object_slug}
        key={item.title}
      >
        {item.title}
      </Link>
    </li>
  );
}

MenuItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    object_slug: PropTypes.string.isRequired,
  }).isRequired,
  classes: PropTypes.string.isRequired,
};

export default MenuItem;
