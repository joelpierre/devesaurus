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
import { slugify } from '../../../utils';

export const PurePrimaryMenu = ({
  className,
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
          className
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
          <div className={styles['primary-menu__inner-overlay']} />

          <Link className={styles['primary-menu__brand-link']} to="/">
            <Brand
              type="character"
              center
              className={styles['primary-menu__brand']}
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
                  className={styles['primary-menu__item']}
                  key={item.order}
                  item={item}
                  onClick={toggleMenuState}
                >
                  {item.classes !== '' && (
                    <FontAwesomeIcon
                      className={classNames(
                        styles['primary-menu__icon'],
                        styles[`icon__${slugify(item.classes)}`]
                      )}
                      icon={
                        item.classes !== 'heart'
                          ? ['far', item.classes]
                          : ['fas', item.classes]
                      }
                    />
                  )}
                  {item.title}{' '}
                  <FontAwesomeIcon
                    className={classNames(styles['primary-menu__right-icon'])}
                    icon={['far', 'chevron-right']}
                  />
                </MenuItem>
              );
            })}
          </ul>

          <SocialMenu className={classNames(styles['primary-menu__social'])} />
        </div>
      </nav>
    </>
  );
};

export const PrimaryMenu = ({ className, isMenuOpen, setMenuState }) => (
  <StaticQuery
    data-test="component-primary-menu-query"
    query={menuQuery}
    render={props => (
      <PurePrimaryMenu
        {...props}
        className={className}
        isMenuOpen={isMenuOpen}
        setMenuState={setMenuState}
      />
    )}
  />
);

PrimaryMenu.defaultProps = {
  className: undefined,
};

PrimaryMenu.propTypes = {
  className: PropTypes.string,
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
