import React from 'react';
import PropTypes from 'prop-types';
import CoreSection from '../../core/CoreSection/CoreSection';
import GridContainer from '../../core/GridContainer/GridContainer';
import GridRow from '../../core/GridRow/GridRow';
import GridColumn from '../../core/GridColumn/GridColumn';

const TextBlock = ({ module, pageTheme }) => {
  return (
    <CoreSection
      data-test="component-text-block"
      classes={`primary-main__section theme--${
        module.theme ? module.theme : pageTheme
      } text-block`}
    >
      <GridContainer>
        <GridRow>
          <GridColumn classes="flex">
            <p className="text-block__content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              culpa illo ipsam magnam nulla optio pariatur qui quidem rem!
              Assumenda deleniti explicabo placeat rem. Dolores eos facere
              praesentium ullam unde!
            </p>
          </GridColumn>
        </GridRow>
      </GridContainer>
    </CoreSection>
  );
};

TextBlock.propTypes = {
  module: PropTypes.instanceOf(Object).isRequired,
  pageTheme: PropTypes.oneOf([
    'brand',
    'alpha',
    'beta',
    'tint-alpha',
    'tint-beta',
    'tint-omega',
    'tint-gamma',
    'tint-psi',
  ]).isRequired,
};

export default TextBlock;
