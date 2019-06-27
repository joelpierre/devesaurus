import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PrimaryHeader from '../components/organisms/PrimaryHeader/PrimaryHeader';
import PrimaryFooter from '../components/organisms/PrimaryFooter/PrimaryFooter';
import SEO from '../shared/SEO/SEO';
import styles from './Layout.module.scss';
import PrimaryMenu from '../components/organisms/PrimaryMenu/PrimaryMenu';

export class CoreLayout extends PureComponent {
  render() {
    const {
      children,
      title,
      description,
      className,
      headerTitle,
      isMenuOpen,
    } = this.props;

    return (
      <>
        <SEO title={title} description={description} />

        <PrimaryMenu isMenuOpen={isMenuOpen} />

        <div
          id="push-wrapper"
          className={classNames('push-wrapper', {
            'push-wrapper--active': isMenuOpen,
          })}
        >
          <PrimaryHeader alt title={headerTitle || title} />
          <main
            data-test="core-layout-main"
            className={classNames([styles['primary-main'], className])}
          >
            {children}
          </main>
          <PrimaryFooter />
        </div>
      </>
    );
  }
}

/* istanbul ignore next */
CoreLayout.defaultProps = {
  title: 'Default Title',
  headerTitle: undefined,
  description: 'Default description',
  className: null,
  isMenuOpen: false,
};

CoreLayout.propTypes = {
  title: PropTypes.string,
  headerTitle: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  isMenuOpen: PropTypes.bool,
};

export default CoreLayout;
