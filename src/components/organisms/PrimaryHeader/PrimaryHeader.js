import React, { createRef, PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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

    this.state = {
      searchFormData: '',
    };

    this.searchForm = createRef();

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleSearchInputOnChange = this.handleSearchInputOnChange.bind(this);
    this.onSearchFormSubmitHandler = this.onSearchFormSubmitHandler.bind(this);
  }

  onSearchFormSubmitHandler(e) {
    e.preventDefault();
    const { searchFormData } = this.state;
    console.log('Form Data: ', searchFormData);
    console.log('Do something on submit');
    this.searchForm.current.reset();
  }

  handleSearchInputOnChange(e) {
    e.preventDefault();
    const {
      target: { value },
    } = e;

    this.setState(() => ({
      searchFormData: value,
    }));
  }

  toggleMenu(e) {
    e.preventDefault();
    const { isMenuOpen, setMenuState } = this.props;
    setMenuState(!isMenuOpen);
  }

  render() {
    const { button: buttonData, input: inputData } = searchFormData;
    const { title, isMenuOpen, alt } = this.props;

    return (
      <header
        data-test="component-primary-header"
        className={classNames(styles['primary-header'], {
          [styles['primary-header--alt']]: alt,
        })}
      >
        <div className={styles['primary-header__wrapper']}>
          <Hamburger
            classes={styles['primary-header__hamburger']}
            descriptor="Menu"
            alt
            isMenuOpen={isMenuOpen}
            onClick={this.toggleMenu}
          />

          <Link to="/">
            <Brand
              type="symbol-inv"
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
              ref={this.searchForm}
              className={styles['primary-header__search-form']}
              onSubmit={this.onSearchFormSubmitHandler}
            >
              {inputData && (
                <InputField
                  {...inputData}
                  onChange={this.handleSearchInputOnChange}
                />
              )}
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
        icon={['fas', 'search']}
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
  alt: false,
};

PrimaryHeader.propTypes = {
  title: PropTypes.string,
  alt: PropTypes.bool,
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
