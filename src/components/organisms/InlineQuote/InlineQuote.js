import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../core/Section/Section';
import Row from '../../core/Row/Row';
import Container from '../../core/Container/Container';
import Flex from '../../core/Flex/Flex';

function InlineQuote({ module, pageTheme }) {
  return (
    <Section
      data-test="component-inline-quote"
      classes={`primary-main__section theme--${
        module.theme ? module.theme : pageTheme
      } inline-quote`}
    >
      <Container>
        <Row>
          <Flex classes="flex">
            <blockquote>This is a blockquote</blockquote>
          </Flex>
        </Row>
      </Container>
    </Section>
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
