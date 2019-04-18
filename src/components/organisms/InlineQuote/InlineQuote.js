import React from 'react';
import PropTypes from 'prop-types';
import CoreSection from '../../core/CoreSection/CoreSection';
import GridRow from '../../core/GridRow/GridRow';
import GridContainer from '../../core/GridContainer/GridContainer';
import GridColumn from '../../core/GridColumn/GridColumn';

function InlineQuote({ module, pageTheme }) {
  return (
    <CoreSection
      data-test="component-inline-quote"
      classes={`primary-main__section theme--${
        module.theme ? module.theme : pageTheme
      } inline-quote`}
    >
      <GridContainer>
        <GridRow>
          <GridColumn classes="flex">
            <blockquote>This is a blockquote</blockquote>
          </GridColumn>
        </GridRow>
      </GridContainer>
    </CoreSection>
  );
}

InlineQuote.propTypes = {
  module: PropTypes.instanceOf(Object).isRequired,
  pageTheme: PropTypes.oneOf([
    'brand',
    'alpha',
    'tint-alpha',
    'tint-beta',
    'tint-psi',
    'tint-omega',
  ]).isRequired,
};

export default InlineQuote;
