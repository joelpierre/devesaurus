import React from 'react';
import Aux from '../hoc/Aux/Aux';
import Layout from '../hoc/Layout/Layout';

export default ({ pageContext }) => (
  <Layout>
    <section className="primary-main__section">
      <div className="container-fluid">
        <div className="row">
          <div className="flex">

            <h1 className="heading-1" dangerouslySetInnerHTML={{ __html: pageContext.title }}/>

          </div>
        </div>
      </div>
    </section>
  </Layout>
);
