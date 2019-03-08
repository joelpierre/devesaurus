import React from 'react';
import Aux from '../hoc/Aux/Aux';
import Layout from '../hoc/Layout/Layout';

export default ({ pageContext }) => (
  <Layout>
    <Aux>
      <h1 className="heading-1" dangerouslySetInnerHTML={{ __html: pageContext.title }}/>
    </Aux>
  </Layout>
);
