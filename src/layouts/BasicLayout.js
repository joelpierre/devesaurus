import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Layout.module.scss';

import SEO from '../components/core/SEO/SEO';
import { getSiteMeta, getSiteOptions } from '../store/actions';
import PrimaryFooter from '../components/organisms/PrimaryFooter/PrimaryFooter';

export class BasicLayout extends PureComponent {
  componentDidMount() {
    const { onGetSiteMeta, onGetSiteOptions } = this.props;
    onGetSiteMeta();
    onGetSiteOptions();
  }

  render() {
    const { children, title, description, classes } = this.props;

    return (
      <>
        <SEO title={title} description={description} />
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
  onGetSiteMeta: () => {},
  onGetSiteOptions: () => {},
};

BasicLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  classes: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onGetSiteMeta: PropTypes.func,
  onGetSiteOptions: PropTypes.func,
};

/* istanbul ignore next */
const mapStateToProps = ({ core: { title, description } }) => ({
  title,
  description,
});

export default connect(
  mapStateToProps,
  {
    onGetSiteMeta: getSiteMeta,
    onGetSiteOptions: getSiteOptions,
  }
)(BasicLayout);
