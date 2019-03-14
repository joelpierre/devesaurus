import React from 'react';
import * as PropTypes from 'prop-types';

import TextBlock from '../components/organisms/TextBlock/TextBlock';
import InlineQuote from '../components/molecules/InlineQuote/InlineQuote';
import ImageBlock from '../components/molecules/ImageBlock/ImageBlock';
import CtaBanner from '../components/organisms/CtaBanner/CtaBanner';

function AcfComponents({ component, pageTheme }) {
  return (
    <>
      {
        /**
         * @name Text Block Component
         * @prop module - object
         * @prop pageTheme - string
         */
        component.acf_fc_layout === 'text_block' && <TextBlock module={component} pageTheme={pageTheme}/>
      }
      {
        /**
         * @name Image Block Component
         * @prop module - object
         * @prop pageTheme - string
         */
        component.acf_fc_layout === 'image_block' && <ImageBlock module={component} pageTheme={pageTheme}/>
      }
      {
        /**
         * @name Inline Quote Component
         * @prop module - object
         * @prop pageTheme - string
         */
        component.acf_fc_layout === 'inline_quote' && <InlineQuote module={component} pageTheme={pageTheme}/>
      }
      {
        /**
         * @name CTA Banner Component
         * @prop module - object
         * @prop pageTheme - string
         */
        component.acf_fc_layout === 'cta_banner' && <CtaBanner module={component} pageTheme={pageTheme}/>
      }
    </>
  );
}

AcfComponents.propTypes = {
  component: PropTypes.instanceOf(Object).isRequired,
  pageTheme: PropTypes.string.isRequired,
};

export default AcfComponents;
