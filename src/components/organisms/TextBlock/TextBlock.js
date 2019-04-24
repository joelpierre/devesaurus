import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Section from '../../core/Section/Section';
import Container from '../../core/Container/Container';
import Row from '../../core/Row/Row';
import Flex from '../../core/Flex/Flex';
import styles from '../CtaBanner/CtaBanner.module.scss';

const TextBlock = ({ module, pageTheme }) => {
  return (
    <Section
      data-test="component-text-block"
      classes={classNames([
        `theme--${module.theme ? module.theme : pageTheme}`,
        styles['text-block'],
      ])}
    >
      <Container>
        <Row>
          <Flex classes="flex">
            <p className="text-block__content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              culpa illo ipsam magnam nulla optio pariatur qui quidem rem!
              Assumenda deleniti explicabo placeat rem. Dolores eos facere
              praesentium ullam unde!
            </p>
          </Flex>
        </Row>
      </Container>
    </Section>
  );
};

TextBlock.propTypes = {
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

export default TextBlock;
