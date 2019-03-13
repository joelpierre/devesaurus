import React from 'react';

import PrimaryHeader from '../components/organisms/PrimaryHeader/PrimaryHeader';
import PrimaryFooter from '../components/organisms/PrimaryFooter/PrimaryFooter';

const CoreLayout = ({ children }) => (
  <>
    <PrimaryHeader/>
    <main className="primary-main">
      {children}
    </main>
    <PrimaryFooter/>
  </>
);

export default CoreLayout;
