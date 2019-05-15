import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

import styles from './FooterMenu.module.scss';

import MenuItem from '../../atoms/MenuItem/MenuItem';

export const PureFooterMenu = ({
  classes,
  allWordpressWpApiMenusMenusItems,
}) => (
  <nav
    data-test="component-footer-menu"
    className={`${styles['footer-menu']} ${classes}`}
  >
    <ul className={styles['footer-menu__list']}>
      {allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
        <MenuItem
          classes={styles['footer-menu__item']}
          key={item.object_slug}
          item={item}
        />
      ))}
    </ul>
  </nav>
);

const FooterMenu = ({ classes }) => (
  <StaticQuery
    data-test="component-footer-menu-query"
    query={menuQuery}
    render={props => <PureFooterMenu {...props} classes={classes} />}
  />
);

FooterMenu.defaultProps = {
  classes: null,
};

FooterMenu.propTypes = {
  classes: PropTypes.string,
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
