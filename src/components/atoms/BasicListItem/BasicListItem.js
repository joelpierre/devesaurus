import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'gatsby';
import styles from './BasicListItem.test.module.scss';

const BasicListItem = ({ children, link }) => {
  return (
    <li
      data-test="component-basic-list-item"
      className={classNames(styles['basic-list-item'])}
    >
      {link ? (
        <Link to={link} className={classNames(styles['basic-list-item__link'])}>
          {children}
        </Link>
      ) : (
        `${children}`
      )}
    </li>
  );
};

BasicListItem.defaultProps = {
  link: undefined,
};

BasicListItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  link: PropTypes.string,
};

export default BasicListItem;
