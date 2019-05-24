import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

import styles from './TermsMenu.module.scss';

import MenuItem from '../../atoms/MenuItem/MenuItem';

export const PureTermsMenu = ({
  classes,
  allWordpressWpApiMenusMenusItems,
}) => (
  <nav
    data-test="component-terms-menu"
    className={`${styles['terms-menu']} ${classes}`}
  >
    <ul className={styles['terms-menu__list']}>
      {allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
        <MenuItem
          classes={styles['terms-menu__item']}
          key={item.object_slug}
          item={item}
        />
      ))}
    </ul>
  </nav>
);

const TermsMenu = ({ classes }) => (
  <StaticQuery
    data-test="component-terms-menu-query"
    query={menuQuery}
    render={props => <PureTermsMenu {...props} classes={classes} />}
  />
);

TermsMenu.defaultProps = {
  classes: null,
};

TermsMenu.propTypes = {
  classes: PropTypes.string,
};

export default TermsMenu;

const menuQuery = graphql`
  {
    allWordpressWpApiMenusMenusItems(filter: { name: { eq: "Terms Menu" } }) {
      edges {
        node {
          name
          items {
            order
            title
            object_slug
            url
            classes
            attr
          }
        }
      }
    }
  }
`;
