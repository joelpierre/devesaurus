import React from 'react';
import * as PropTypes from 'prop-types';
import Aux from '../Aux/Aux';
import TextBlock from '../../components/organisms/TextBlock/TextBlock';
import InlineQuote from '../../components/organisms/InlineQuote/InlineQuote';

function AcfComponents({ component }) {
  return (
    <Aux>
      {component.__typename === 'text_block' ? (
        <TextBlock module={component}/>
      ) : null}

      {component.__typename === 'inline_quote' ? (
        <InlineQuote module={component}/>
      ) : null}
    </Aux>
  );
}

AcfComponents.propTypes = {
  component: PropTypes.instanceOf(Object).isRequired,
};

export default AcfComponents;
