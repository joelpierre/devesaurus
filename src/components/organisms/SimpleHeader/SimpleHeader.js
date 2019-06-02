import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import Hamburger from '../../atoms/Hamburger/Hamburger';
import styles from './SimpleHeader.module.scss';
import * as coreActions from '../../../store/actions';
import MenuItem from '../../atoms/MenuItem/MenuItem';

export class SimpleHeader extends PureComponent {
  constructor() {
    super();
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  /**
   * Toggle the menu state
   * @param e
   */
  toggleMenu(e) {
    e.preventDefault();

    const { isMenuOpen, setMenuState } = this.props;

    setMenuState(!isMenuOpen);
  }

  render() {
    const { isMenuOpen } = this.props;

    return (
      <header
        className={classNames([styles['simple-header']])}
        data-test="component-simple-header"
      >
        <div className={classNames(styles['simple-header__wrapper'])}>
          <Hamburger
            className={styles['simple-header__hamburger']}
            descriptor="Menu"
            isMenuOpen={isMenuOpen}
            onClick={this.toggleMenu}
          />

          <nav className={styles['simple-header__menu']}>
            <ul className={classNames(styles['simple-header__list'])}>
              <MenuItem
                item={{
                  url: '/about',
                  className: styles['simple-header__link'],
                }}
                className={classNames(styles['simple-header__item'])}
              >
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                What's Devesaurus?
              </MenuItem>

              <MenuItem
                item={{
                  url: '/contact',
                  className: styles['simple-header__button'],
                }}
                className={classNames(styles['simple-header__item'])}
              >
                Help Contribute
                <FontAwesomeIcon
                  className={classNames(styles['simple-header__icon'])}
                  icon={['fas', 'heart']}
                />
              </MenuItem>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

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
)(SimpleHeader);
