import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

import styles from './PrimaryMenu.module.scss';

import MenuItem from '../../atoms/MenuItem/MenuItem';

export const PurePrimaryMenu = ({
  classes,
  allWordpressWpApiMenusMenusItems,
}) => (
  <nav
    data-test="component-primary-menu"
    className={`${styles['primary-menu']} ${classes}`}
  >
    <ul className={styles['primary-menu__list']}>
      {allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
        <MenuItem
          classes={styles['primary-menu__item']}
          key={item.object_slug}
          item={item}
        />
      ))}
    </ul>
  </nav>
);

const PrimaryMenu = ({ classes }) => (
  <StaticQuery
    data-test="component-primary-menu-query"
    query={menuQuery}
    render={props => <PurePrimaryMenu {...props} classes={classes} />}
  />
);

PrimaryMenu.defaultProps = {
  classes: null,
};

PrimaryMenu.propTypes = {
  classes: PropTypes.string,
};

export default PrimaryMenu;

const menuQuery = graphql`
  {
    allWordpressWpApiMenusMenusItems(filter: { name: { eq: "Primary Menu" } }) {
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
