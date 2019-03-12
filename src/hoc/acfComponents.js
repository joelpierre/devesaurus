import React from 'react';
import * as PropTypes from 'prop-types';
import TextBlock from '../components/organisms/TextBlock/TextBlock';
import InlineQuote from '../components/organisms/InlineQuote/InlineQuote';

function AcfComponents({ component }) {
  return (
    <>
      {component.__typename === 'text_block' && <TextBlock module={component}/>}
      {component.__typename === 'inline_quote' && <InlineQuote module={component}/>}
    </>
  );
}

AcfComponents.propTypes = {
  component: PropTypes.instanceOf(Object).isRequired,
};

export default AcfComponents;
