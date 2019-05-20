import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Layout.module.scss';

import SEO from '../components/core/SEO/SEO';
import PrimaryFooter from '../components/organisms/PrimaryFooter/PrimaryFooter';
import SimpleHeader from '../components/organisms/SimpleHeader/SimpleHeader';

export class BasicLayout extends PureComponent {
  render() {
    const { children, title, description, classes } = this.props;

    return (
      <>
        <SEO title={title} description={description} />
        <SimpleHeader />
        <main
          data-test="basic-layout-main"
          className={classNames([styles['primary-main'], classes])}
        >
          {children}
        </main>
        <PrimaryFooter />
      </>
    );
  }
}

/* istanbul ignore next */
BasicLayout.defaultProps = {
  title: 'Default Title',
  description: 'Default description',
  classes: null,
};

BasicLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  classes: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default BasicLayout;
