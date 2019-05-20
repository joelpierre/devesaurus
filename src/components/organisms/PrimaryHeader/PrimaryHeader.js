import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import * as styles from './PrimaryHeader.module.scss';
import Brand from '../../atoms/Brand/Brand';
import Heading from '../../core/Heading/Heading';
import InputField from '../../atoms/InputField/InputField';
import Button from '../../molecules/Buttons/Button';
import Hamburger from '../../atoms/Hamburger/Hamburger';
import * as coreActions from '../../../store/actions/index';

export class PrimaryHeader extends PureComponent {
  constructor() {
    super();

    this.toggleMenu = this.toggleMenu.bind(this);
    this.onSearchFormSubmitHandler = this.toggleMenu.bind(this);
  }

  onSearchFormSubmitHandler(e) {
    e.preventDefault();
    console.log('Do something on submit');
  }

  toggleMenu(e) {
    e.preventDefault();
    const { isMenuOpen, setMenuState } = this.props;
    setMenuState(!isMenuOpen);
  }

  render() {
    const { button: buttonData, input: inputData } = searchFormData;
    const { title, isMenuOpen } = this.props;

    return (
      <header
        data-test="component-primary-header"
        className={styles['primary-header']}
      >
        <div className={styles['primary-header__wrapper']}>
          <Hamburger
            classes={styles['primary-header__hamburger']}
            descriptor="Menu"
            isMenuOpen={isMenuOpen}
            onClick={this.toggleMenu}
          />

          <Link to="/">
            <Brand
              type="symbol"
              left
              classes={styles['primary-header__brand']}
            />
          </Link>

          {title && (
            <div className={styles['primary-header__title']}>
              <Heading
                priority={1}
                classes={styles['primary-header__title-text']}
              >
                {title}
              </Heading>
            </div>
          )}

          <div className={styles['primary-header__search']}>
            <form
              className={styles['primary-header__search-form']}
              onSubmit={this.onSearchFormSubmitHandler}
            >
              {inputData && <InputField {...inputData} />}
              {buttonData && <Button {...buttonData}>{buttonData.text}</Button>}
            </form>
          </div>
        </div>
      </header>
    );
  }
}

const searchFormData = {
  button: {
    behavior: 'action',
    theme: 'brand',
    type: 'submit',
    text: (
      <FontAwesomeIcon
        icon={['far', 'search']}
        className={styles['primary-header__search-icon']}
      />
    ),
    classes: styles['primary-header__search-btn'],
  },
  input: {
    classes: styles['primary-header__search-input'],
    name: 'hero-search',
    type: 'text',
    placeholder: 'Enter a search term. e.g. HTML',
  },
};

PrimaryHeader.defaultProps = {
  title: undefined,
};

PrimaryHeader.propTypes = {
  title: PropTypes.string,
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
)(PrimaryHeader);
