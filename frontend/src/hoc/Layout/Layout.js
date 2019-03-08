import React from 'react';
import './Layout.scss';
import Aux from '../Aux/Aux';
import PrimaryHeader from '../../components/organisms/PrimaryHeader/PrimaryHeader';

const Layout = ({ children }) => (
  <Aux>
    <PrimaryHeader/>
    {children}
  </Aux>
);

export default Layout;
