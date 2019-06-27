import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Section from '../../../shared/Section/Section';
import Container from '../../../shared/Container/Container';
import Row from '../../../shared/Row/Row';
import Flex from '../../../shared/Flex/Flex';
import styles from '../CtaBanner/CtaBanner.module.scss';
import { defaultPageTheme, pageThemePropType } from '../../../utils/propTypes';

const TextBlock = ({ module, pageTheme, ...props }) => {
  return (
    <Section
      data-test="component-text-block"
      className={classNames([
        `theme--${module.theme ? module.theme : pageTheme}`,
        styles['text-block'],
      ])}
      {...props}
    >
      <Container>
        <Row>
          <Flex className="flex">
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

TextBlock.defaultProps = {
  ...defaultPageTheme(),
};

TextBlock.propTypes = {
  module: PropTypes.instanceOf(Object).isRequired,
  ...pageThemePropType,
};

export default TextBlock;
