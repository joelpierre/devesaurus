import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

import styles from './FooterMenu.module.scss';

import MenuItem from '../../atoms/MenuItem/MenuItem';

export const PureFooterMenu = ({
  className,
  allWordpressWpApiMenusMenusItems,
}) => (
  <nav
    data-test="component-footer-menu"
    className={`${styles['footer-menu']} ${className}`}
  >
    <ul className={styles['footer-menu__list']}>
      {allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
        <MenuItem
          className={styles['footer-menu__item']}
          key={item.order}
          item={item}
        />
      ))}
    </ul>
  </nav>
);

const FooterMenu = ({ className }) => (
  <StaticQuery
    data-test="component-footer-menu-query"
    query={menuQuery}
    render={props => <PureFooterMenu {...props} className={className} />}
  />
);

FooterMenu.defaultProps = {
  className: null,
};

FooterMenu.propTypes = {
  className: PropTypes.string,
};

export default FooterMenu;

const menuQuery = graphql`
  {
    allWordpressWpApiMenusMenusItems(filter: { name: { eq: "Footer Menu" } }) {
      edges {
        node {
          name
          items {
            order
            title
            object_slug
          }
        }
      }
    }
  }
`;
