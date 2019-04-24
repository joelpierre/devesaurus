import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextBlock from '../components/organisms/TextBlock/TextBlock';
import InlineQuote from '../components/organisms/InlineQuote/InlineQuote';
import ImageBlock from '../components/organisms/ImageBlock/ImageBlock';
import CtaBanner from '../components/organisms/CtaBanner/CtaBanner';
import { defaultPageTheme, pageThemePropType } from '../utils/propTypes';

class AcfComponents extends Component {
  render() {
    const { component, pageTheme } = this.props;

    return (
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
  }
}

AcfComponents.defaultProps = {
  ...defaultPageTheme,
};

AcfComponents.propTypes = {
  component: PropTypes.instanceOf(Object).isRequired,
  ...pageThemePropType,
};

export default AcfComponents;
