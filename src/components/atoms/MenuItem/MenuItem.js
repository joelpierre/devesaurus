import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'gatsby';
import styles from './MenuItem.module.scss';
import { sanitizeUrl } from '../../../utils';

function MenuItem({ item, className, children, ...props }) {
  const { attr } = item;
  const link = sanitizeUrl(item.url);
  let el;

  /**
   * Based on the item.attr we will decide what menu item to pass
   */
  switch (attr) {
    case 'divider':
      el = null;
      break;
    case 'anchor':
      el = (
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
      el = (
        <Link
          className={styles['menu-item__link']}
          to={`/${link}`}
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
      className={classNames(className, styles['menu-item'])}
      {...props}
    >
      {el}
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
    title: PropTypes.string,
    object_slug: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    classes: PropTypes.string.isRequired,
    attr: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.string.isRequired,
};

export default MenuItem;
