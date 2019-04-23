import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './CtaBanner.module.scss';
import Container from '../../core/Container/Container';
import Row from '../../core/Row/Row';
import Flex from '../../core/Flex/Flex';
import Section from '../../core/Section/Section';
import Heading from '../../core/Heading/Heading';

const CtaBanner = ({ module, pageTheme }) => {
  return (
    <Section
      data-test="component-cta-banner"
      classes={classNames([
        `theme--${module.theme ? module.theme : pageTheme}`,
        styles['cta-banner'],
      ])}
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
};

CtaBanner.defaultProps = {
  pageTheme: 'brand',
};

CtaBanner.propTypes = {
  module: PropTypes.instanceOf(Object).isRequired,
  pageTheme: PropTypes.string,
};

export default CtaBanner;
