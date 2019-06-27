import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './CtaBanner.module.scss';
import Container from '../../../shared/Container/Container';
import Row from '../../../shared/Row/Row';
import Flex from '../../../shared/Flex/Flex';
import Section from '../../../shared/Section/Section';
import Heading from '../../../shared/Heading/Heading';
import { defaultPageTheme, pageThemePropType } from '../../../utils/propTypes';

const CtaBanner = ({ module, pageTheme }) => {
  return (
    <Section
      data-test="component-cta-banner"
      className={classNames([
        `theme--${module.theme ? module.theme : pageTheme}`,
        styles['cta-banner'],
      ])}
    >
      <Container className="container-fluid">
        <Row className="row">
          <Flex>
            <Heading priority="2">CTA Banner</Heading>
          </Flex>
        </Row>
      </Container>
    </Section>
  );
};

CtaBanner.defaultProps = {
  ...defaultPageTheme(),
};

CtaBanner.propTypes = {
  module: PropTypes.instanceOf(Object).isRequired,
  ...pageThemePropType,
};

export default CtaBanner;
