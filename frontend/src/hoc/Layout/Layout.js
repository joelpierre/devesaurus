import React from 'react';
import './Layout.scss';
import Aux from '../Aux/Aux';
import PrimaryHeader from '../../components/organisms/PrimaryHeader/PrimaryHeader';
import PrimaryFooter from '../../components/organisms/PrimaryFooter/PrimaryFooter';

const Layout = ({ children }) => (
  <Aux>
    <PrimaryHeader/>

    <main className="primary-main">
      {children}
    </main>
    
    <PrimaryFooter/>
  </Aux>
);

export default Layout;
