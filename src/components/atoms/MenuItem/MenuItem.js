import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'gatsby';
import styles from './MenuItem.module.scss';
import { sanitizeUrl } from '../../../utils';

function MenuItem({ item, classes, children, ...props }) {
  const { attr } = item;
  let link;

  /**
   * Based on the item.attr we will decide what menu item to pass
   */
  switch (attr) {
    case 'divider':
      link = null;
      break;
    case 'anchor':
      link = (
        <a
          className={styles['menu-item__link']}
          key={item.order}
          href={item.url}
          rel="noreferrer nofollow"
        >
          {children || item.title || 'No title'}
        </a>
      );
      break;
    default:
      link = (
        <Link
          className={styles['menu-item__link']}
          to={`/${sanitizeUrl(item.url)}`}
          key={item.order}
        >
          {children || item.title || 'No title'}
        </Link>
      );
      break;
  }

  return (
    <li
      data-test="component-menu-item"
      className={classNames(classes, styles['menu-item'])}
      {...props}
    >
      {link}
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
    url: PropTypes.string.isRequired,
    classes: PropTypes.string.isRequired,
    attr: PropTypes.string.isRequired,
  }).isRequired,
  classes: PropTypes.string.isRequired,
};

export default MenuItem;
