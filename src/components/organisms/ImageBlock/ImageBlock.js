import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../core/Section/Section';
import Container from '../../core/Container/Container';
import Row from '../../core/Row/Row';
import Flex from '../../core/Flex/Flex';
import Heading from '../../core/Heading/Heading';

function ImageBlock({ module, pageTheme }) {
  return (
    <Section
      data-test="component-image-block"
      classes={`primary-main__section theme--${
        module.theme ? module.theme : pageTheme
      } image-block`}
    >
      <Container classes="container-fluid">
        <Row classes="row">
          <Flex classes="flex text-center">
            <Heading priority="2">Image Block</Heading>
          </Flex>
        </Row>
      </Container>
    </Section>
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
