import React from 'react';
import Container from '../../core/Container/Container';
import Row from '../../core/Row/Row';
import Flex from '../../core/Flex/Flex';
import Section from '../../core/Section/Section';
import Heading from '../../core/Heading/Heading';

function CtaBanner({ module, pageTheme }) {
  return (
    <Section
      data-test="component-image-block"
      classes={`primary-main__section theme--${
        module.theme ? module.theme : pageTheme
      } cta-banner`}
    >
      <Container classes="container-fluid">
        <Row classes="row">
          <Flex>
            <Heading priority="2">CTA Banner</Heading>
          </Flex>
        </Row>
      </Container>
    </Section>
  );
}

export default CtaBanner;
