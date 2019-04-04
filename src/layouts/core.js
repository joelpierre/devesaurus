import React from 'react';
import PropTypes from 'prop-types';

import PrimaryHeader from '../components/organisms/PrimaryHeader/PrimaryHeader';
import PrimaryFooter from '../components/organisms/PrimaryFooter/PrimaryFooter';
import SEO from '../utils/seo';

const CoreLayout = ({ children, metaTitle, metaDescription }) => (
  <>
    <SEO title={metaTitle} description={metaDescription}/>
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
  children: PropTypes.instanceOf(Object).isRequired,
};

export default CoreLayout;
