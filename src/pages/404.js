import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { BasicLayout } from '../layouts/BasicLayout';

export const NotFoundPage = ({ isMenuOpen }) => (
  <BasicLayout
    isMenuOpen={isMenuOpen}
    data-test="page-error-404"
    title="Error page not found"
  >
    404 Error
  </BasicLayout>
);

NotFoundPage.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
};

/* istanbul ignore next */
const mapStateToProps = ({ core: { isMenuOpen } }) => ({
  isMenuOpen,
});

export default connect(mapStateToProps)(NotFoundPage);
