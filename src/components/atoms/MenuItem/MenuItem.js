import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'gatsby';
import styles from './MenuItem.module.scss';

function MenuItem({ item, classes, children, ...props }) {
  return (
    <li
      data-test="component-menu-item"
      className={classNames(classes, styles['menu-item'])}
      {...props}
    >
      <Link
        className={styles['menu-item__link']}
        to={`/` + item.object_slug}
        key={item.title}
      >
        {children || item.title || 'No title'}
      </Link>
    </li>
  );
}

MenuItem.defaultProps = {
  children: undefined,
};

MenuItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    object_slug: PropTypes.string.isRequired,
  }).isRequired,
  classes: PropTypes.string.isRequired,
};

export default MenuItem;
