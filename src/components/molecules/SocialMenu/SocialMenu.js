import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './SocialMenu.module.scss';
import MenuItem from '../../atoms/MenuItem/MenuItem';

export const PureSocialMenu = ({
  classes,
  allWordpressWpApiMenusMenusItems,
}) => (
  <nav
    data-test="component-social-menu"
    className={classNames(styles['social-menu'], classes)}
  >
    <ul className={styles['social-menu__list']}>
      {allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
        <MenuItem
          classes={styles['social-menu__item']}
          key={item.object_slug}
          item={item}
        />
      ))}
    </ul>
  </nav>
);

const SocialMenu = ({ classes }) => (
  <StaticQuery
    data-test="component-primary-menu-query"
    query={menuQuery}
    render={props => <PureSocialMenu {...props} classes={classes} />}
  />
);

SocialMenu.defaultProps = {
  classes: undefined,
};

SocialMenu.propTypes = {
  classes: PropTypes.string,
};

export default SocialMenu;

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
