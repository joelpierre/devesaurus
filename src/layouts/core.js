import React from 'react';
import PropTypes from 'prop-types';

import PrimaryHeader from '../components/organisms/PrimaryHeader/PrimaryHeader';
import PrimaryFooter from '../components/organisms/PrimaryFooter/PrimaryFooter';
import SEO from '../components/templates/page';

const CoreLayout = ({ children, metaTitle, metaDescription }) => (
  <>
    <PrimaryHeader/>
    <main className="primary-main">
      {children}
    </main>
    <PrimaryFooter/>
  </>
);

CoreLayout.defaultProps = {
  metaTitle: 'Default Title',
  metaDescription: 'Default description',
};

CoreLayout.propTypes = {
  metaTitle: PropTypes.string,
  metaDescription: PropTypes.string,
};

export default CoreLayout;
