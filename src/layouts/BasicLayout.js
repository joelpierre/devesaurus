import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Layout.module.scss';

import SEO from '../utils/seo';
import { getSiteMeta } from '../store/actions';

export class BasicLayout extends PureComponent {
  componentDidMount() {
    const { onGetSiteMeta } = this.props;
    onGetSiteMeta();
  }

  render() {
    const { children, title, description, classes } = this.props;

    return (
      <>
        <SEO title={title} description={description} />
        <main
          data-test="index-main"
          className={classNames([styles['primary-main'], ...classes])}
        >
          {children}
        </main>
      </>
    );
  }
}

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
  onGetSiteMeta: PropTypes.func.isRequired,
};

const mapStateToProps = ({ core: { title, description } }) => ({
  title,
  description,
});

export default connect(
  mapStateToProps,
  { onGetSiteMeta: getSiteMeta }
)(BasicLayout);
