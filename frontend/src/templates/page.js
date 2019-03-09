import React from 'react';
import CoreLayout from '../layouts/core';

export default ({ pageContext }) => (
  <CoreLayout>
    <section className="primary-main__section">
      <div className="container-fluid">
        <div className="row">
          <div className="flex">

            <h1 className="heading-1" dangerouslySetInnerHTML={{ __html: pageContext.title }}/>

          </div>
        </div>
      </div>
    </section>
  </CoreLayout>
);
