import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import styles from './PrimaryMenu.module.scss';
import * as coreActions from '../../../store/actions/core.actions';
import MenuItem from '../../atoms/MenuItem/MenuItem';
import Brand from '../../atoms/Brand/Brand';
import SocialMenu from '../../molecules/SocialMenu/SocialMenu';

export const PurePrimaryMenu = ({
  classes,
  isMenuOpen,
  allWordpressWpApiMenusMenusItems,
  setMenuState,
}) => {
  /**
   * Change the body class depending on the isMenuOpen state.
   * @returns {jsx}
   */
  const setBodyClass = () => {
    return (
      <Helmet>
        <body className={isMenuOpen ? 'menu-is-active' : ''} />
      </Helmet>
    );
  };

  /**
   * Toggle the menu state, this changes the global state
   */
  const toggleMenuState = () => {
    setMenuState(!isMenuOpen);
  };

  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <>
      {setBodyClass()}
      <nav
        data-test="component-primary-menu"
        className={classNames(
          styles['primary-menu'],
          { [styles['primary-menu--is-active']]: isMenuOpen },
          classes
        )}
      >
        {/* eslint-disable-next-line jsx-a11y/interactive-supports-focus */}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <button
          type="button"
          className={classNames(styles['primary-menu__overlay'], {
            [styles['primary-menu__overlay--is-active']]: isMenuOpen,
          })}
          onClick={toggleMenuState}
        />
        <div className={styles['primary-menu__inner']}>
          <Link className={styles['primary-menu__brand-link']} to="/">
            <Brand
              type="character"
              center
              classes={styles['primary-menu__brand']}
            />
          </Link>

          <ul className={styles['primary-menu__list']}>
            {allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => {
              return item.attr === 'divider' ? (
                <li
                  key={item.order}
                  className={styles['primary-menu__divider']}
                />
              ) : (
                <MenuItem
                  classes={styles['primary-menu__item']}
                  key={item.order}
                  item={item}
                  onClick={toggleMenuState}
                >
                  {item.title}{' '}
                  <FontAwesomeIcon
                    className={classNames(styles['primary-menu__icon'])}
                    icon={['far', 'chevron-right']}
                  />
                </MenuItem>
              );
            })}
          </ul>

          <SocialMenu classes={classNames(styles['primary-menu__social'])} />
        </div>
      </nav>
    </>
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
            url
            classes
            attr
          }
        }
      }
    }
  }
`;
