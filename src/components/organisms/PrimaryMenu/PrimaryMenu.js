import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';

import styles from './PrimaryMenu.module.scss';
import * as coreActions from '../../../store/actions/core.actions';
import MenuItem from '../../atoms/MenuItem/MenuItem';

export const PurePrimaryMenu = ({
  classes,
  isMenuOpen,
  allWordpressWpApiMenusMenusItems,
  setMenuState,
}) => {
  const toggleMenuState = () => {
    setMenuState(!isMenuOpen);
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
    <nav
      data-test="component-primary-menu"
      className={classNames(
        styles['primary-menu'],
        { [styles['primary-menu--is-active']]: isMenuOpen },
        classes
      )}
      onClick={toggleMenuState}
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
};

export const PrimaryMenu = ({ classes, isMenuOpen, setMenuState }) => (
  <StaticQuery
    data-test="component-primary-menu-query"
    query={menuQuery}
    render={props => (
      <PurePrimaryMenu
        {...props}
        classes={classes}
        isMenuOpen={isMenuOpen}
        setMenuState={setMenuState}
      />
    )}
  />
);

PrimaryMenu.defaultProps = {
  classes: undefined,
};

PrimaryMenu.propTypes = {
  classes: PropTypes.string,
  isMenuOpen: PropTypes.bool.isRequired,
  setMenuState: PropTypes.func.isRequired,
};

/* istanbul ignore next */
const mapStateToProps = ({ core: { isMenuOpen } }) => ({
  isMenuOpen,
});

/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
  setMenuState: data => dispatch(coreActions.setMenuState(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrimaryMenu);

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
