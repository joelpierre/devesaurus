import React from 'react';
import './core.scss';
import PrimaryHeader from '../components/organisms/PrimaryHeader/PrimaryHeader';
import PrimaryFooter from '../components/organisms/PrimaryFooter/PrimaryFooter';
import Aux from '../hoc/Aux/Aux';

const CoreLayout = ({ children }) => (
  <Aux>
    <PrimaryHeader/>

    <main className="primary-main">
      {children}
    </main>

    <PrimaryFooter/>
  </Aux>
);

export default CoreLayout;
