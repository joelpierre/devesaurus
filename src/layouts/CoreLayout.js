import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PrimaryHeader from '../components/organisms/PrimaryHeader/PrimaryHeader';
import PrimaryFooter from '../components/organisms/PrimaryFooter/PrimaryFooter';
import SEO from '../utils/seo';
import { getSiteMeta, getSiteOptions } from '../store/actions';
import styles from './Layout.module.scss';

export class CoreLayout extends PureComponent {
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
        <PrimaryHeader />
        <main
          data-test="core-layout-main"
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
CoreLayout.defaultProps = {
  title: 'Default Title',
  description: 'Default description',
  classes: null,
  onGetSiteMeta: () => {},
  onGetSiteOptions: () => {},
};

CoreLayout.propTypes = {
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
)(CoreLayout);
