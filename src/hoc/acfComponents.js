import React from 'react';
import PropTypes from 'prop-types';

import TextBlock from '../components/organisms/TextBlock/TextBlock';
import InlineQuote from '../components/organisms/InlineQuote/InlineQuote';
import ImageBlock from '../components/organisms/ImageBlock/ImageBlock';
import CtaBanner from '../components/organisms/CtaBanner/CtaBanner';

const AcfComponents = ({ component, pageTheme }) => (
  <>
    {/**
     * @name Text Block Component
     * @prop module - object
     * @prop pageTheme - string
     */
    component.acf_fc_layout === 'text_block' && (
      <TextBlock
        data-test={`hoc-acf-${component.acf_fc_layout}`}
        module={component}
        pageTheme={pageTheme}
      />
    )}
    {/**
     * @name Image Block Component
     * @prop module - object
     * @prop pageTheme - string
     */
    component.acf_fc_layout === 'image_block' && (
      <ImageBlock
        data-test={`hoc-acf-${component.acf_fc_layout}`}
        module={component}
        pageTheme={pageTheme}
      />
    )}
    {/**
     * @name Inline Quote Component
     * @prop module - object
     * @prop pageTheme - string
     */
    component.acf_fc_layout === 'inline_quote' && (
      <InlineQuote
        data-test={`hoc-acf-${component.acf_fc_layout}`}
        module={component}
        pageTheme={pageTheme}
      />
    )}
    {/**
     * @name CTA Banner Component
     * @prop module - object
     * @prop pageTheme - string
     */
    component.acf_fc_layout === 'cta_banner' && (
      <CtaBanner
        data-test={`hoc-acf-${component.acf_fc_layout}`}
        module={component}
        pageTheme={pageTheme}
      />
    )}
  </>
);

AcfComponents.propTypes = {
  component: PropTypes.instanceOf(Object).isRequired,
  pageTheme: PropTypes.string.isRequired,
};

export default AcfComponents;
