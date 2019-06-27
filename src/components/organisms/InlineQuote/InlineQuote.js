import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Section from '../../../shared/Section/Section';
import Row from '../../../shared/Row/Row';
import Container from '../../../shared/Container/Container';
import Flex from '../../../shared/Flex/Flex';
import styles from '../CtaBanner/CtaBanner.module.scss';
import { defaultPageTheme, pageThemePropType } from '../../../utils/propTypes';

const InlineQuote = ({ module, pageTheme }) => {
  return (
    <Section
      data-test="component-inline-quote"
      className={classNames([
        `theme--${module.theme ? module.theme : pageTheme}`,
        styles['inline-quote'],
      ])}
    >
      <Container>
        <Row>
          <Flex className="flex">
            <blockquote>This is a blockquote</blockquote>
          </Flex>
        </Row>
      </Container>
    </Section>
  );
};

InlineQuote.defaultProps = {
  ...defaultPageTheme(),
};

InlineQuote.propTypes = {
  module: PropTypes.instanceOf(Object).isRequired,
  ...pageThemePropType,
};

export default InlineQuote;
