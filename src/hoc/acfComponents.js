import React from 'react';
import * as PropTypes from 'prop-types';
import TextBlock from '../components/organisms/TextBlock/TextBlock';
import InlineQuote from '../components/molecules/InlineQuote/InlineQuote';
import ImageBlock from '../components/molecules/ImageBlock/ImageBlock';

function AcfComponents({ component, pageTheme }) {
  return (
    <>
      {component.__typename === 'text_block' && <TextBlock module={component} pageTheme={pageTheme}/>}
      {component.__typename === 'image_block' && <ImageBlock module={component} pageTheme={pageTheme}/>}
      {component.__typename === 'inline_quote' && <InlineQuote module={component} pageTheme={pageTheme}/>}
    </>
  );
}

AcfComponents.propTypes = {
  component: PropTypes.instanceOf(Object).isRequired,
  pageTheme: PropTypes.string.isRequired,
};

export default AcfComponents;
