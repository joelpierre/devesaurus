import React from 'react';
import './Layout.scss';
import Aux from '../Aux/Aux';
import PrimaryHeader from '../../components/organisms/PrimaryHeader/PrimaryHeader';
import PrimaryFooter from '../../components/organisms/PrimaryFooter/PrimaryFooter';
import { Link } from 'gatsby';

const Layout = ({ children }) => (
  <Aux>
    <PrimaryHeader/>

    <main className="primary-main">

      <nav>
        <Link to="/word/web-development">Web Development</Link>
        <Link to="/word/graphic-design">Graphic Design</Link>
      </nav>

      {children}
    </main>

    <PrimaryFooter/>
  </Aux>
);

export default Layout;
