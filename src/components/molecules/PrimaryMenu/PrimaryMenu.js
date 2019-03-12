import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import * as classes from './PrimaryMenu.module.scss';

import Aux from '../../../hoc/Aux/Aux';
import MenuItem from '../../atoms/MenuItem/MenuItem';

const PrimaryMenu = () => (
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
      <Aux>
        <nav className={classes['primary-menu']}>
          <ul className={classes['primary-menu__list']}>
            {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
              <MenuItem classes={classes['primary-menu__item']} key={item.object_slug} item={item}/>
            ))}
          </ul>
        </nav>
      </Aux>
    )}
  />

);

export default PrimaryMenu;
