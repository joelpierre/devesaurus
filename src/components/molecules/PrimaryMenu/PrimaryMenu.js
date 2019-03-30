import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import * as styles from './PrimaryMenu.module.scss';

import MenuItem from '../../atoms/MenuItem/MenuItem';

const PrimaryMenu = ({ classes }) => (
  <StaticQuery
    query={graphql`
    {
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
    }`}
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

export default PrimaryMenu;
