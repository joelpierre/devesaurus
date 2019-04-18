import React from 'react';
import PropTypes from 'prop-types';
import CoreSection from '../../core/CoreSection/CoreSection';
import GridContainer from '../../core/GridContainer/GridContainer';
import GridRow from '../../core/GridRow/GridRow';
import GridColumn from '../../core/GridColumn/GridColumn';
import Heading from '../../core/Heading/Heading';

function ImageBlock({ module, pageTheme }) {
  return (
    <CoreSection
      data-test="component-image-block"
      classes={`primary-main__section theme--${
        module.theme ? module.theme : pageTheme
      } image-block`}
    >
      <GridContainer classes="container-fluid">
        <GridRow classes="row">
          <GridColumn classes="flex text-center">
            <Heading priority="2">Image Block</Heading>
          </GridColumn>
        </GridRow>
      </GridContainer>
    </CoreSection>
  );
}

ImageBlock.propTypes = {
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

export default ImageBlock;
