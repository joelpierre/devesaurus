import React from 'react';
import GridContainer from '../../core/GridContainer/GridContainer';
import GridRow from '../../core/GridRow/GridRow';
import GridColumn from '../../core/GridColumn/GridColumn';
import CoreSection from '../../core/CoreSection/CoreSection';
import Heading from '../../core/Heading/Heading';

function CtaBanner({ module, pageTheme }) {
  return (
    <CoreSection
      data-test="component-image-block"
      classes={`primary-main__section theme--${
        module.theme ? module.theme : pageTheme
      } cta-banner`}
    >
      <GridContainer classes="container-fluid">
        <GridRow classes="row">
          <GridColumn classes="flex text-center">
            <Heading priority="2">CTA Banner</Heading>
          </GridColumn>
        </GridRow>
      </GridContainer>
    </CoreSection>
  );
}

export default CtaBanner;
