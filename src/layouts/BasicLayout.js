import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Layout.module.scss';

import SEO from '../shared/SEO/SEO';
import PrimaryFooter from '../components/organisms/PrimaryFooter/PrimaryFooter';
import SimpleHeader from '../components/organisms/SimpleHeader/SimpleHeader';
import PrimaryMenu from '../components/organisms/PrimaryMenu/PrimaryMenu';

export class BasicLayout extends PureComponent {
  render() {
    const { children, title, description, className, isMenuOpen } = this.props;

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
          <SimpleHeader />
          <main
            data-test="basic-layout-main"
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
BasicLayout.defaultProps = {
  title: 'Default Title',
  description: 'Default description',
  className: null,
};

BasicLayout.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default BasicLayout;
