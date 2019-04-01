import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

import * as styles from './PrimaryMenu.module.scss';

import MenuItem from '../../atoms/MenuItem/MenuItem';

const PrimaryMenu = ({ classes }) => (
  <StaticQuery
    query={menuQuery}
    render={props => (
      <>
        <nav className={`${styles['primary-menu']} ${classes}`}>
          <ul className={styles['primary-menu__list']}>
            {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
              <MenuItem classes={styles['primary-menu__item']} key={item.object_slug} item={item}/>
            ))}
          </ul>
        </nav>
      </>
    )}
  />

);

PrimaryMenu.defaultProps = {
  classes: null,
};

PrimaryMenu.propTypes = {
  classes: PropTypes.string,
};

export default PrimaryMenu;

const menuQuery = graphql`{
      allWordpressWpApiMenusMenusItems(filter: {name: {
        eq: "Primary Menu"
      }}) {
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
    }`;
