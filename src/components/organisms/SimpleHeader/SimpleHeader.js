import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import Hamburger from '../../atoms/Hamburger/Hamburger';
import styles from './SimpleHeader.module.scss';
import * as coreActions from '../../../store/actions';

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
    const { isMenuOpen, setMenuState } = this.props;

    // console.log(isMenuOpen);
    // console.log(setMenuState);

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
