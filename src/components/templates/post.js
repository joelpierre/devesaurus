import React from 'react';
import Aux from '../hoc/Aux/Aux';

export default ({ pageContext }) => (
  <Aux>
    <h1>
      {pageContext.title}
    </h1>
  </Aux>
);
