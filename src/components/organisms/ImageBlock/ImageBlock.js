import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Section from '../../core/Section/Section';
import Container from '../../core/Container/Container';
import Row from '../../core/Row/Row';
import Flex from '../../core/Flex/Flex';
import Heading from '../../core/Heading/Heading';
import styles from '../CtaBanner/CtaBanner.module.scss';
import { defaultPageTheme, pageThemePropType } from '../../../utils/propTypes';

const ImageBlock = ({ module, pageTheme }) => {
  return (
    <Section
      data-test="component-image-block"
      classes={classNames([
        `theme--${module.theme ? module.theme : pageTheme}`,
        styles['image-block'],
      ])}
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
};

ImageBlock.defaultProps = {
  ...defaultPageTheme,
};

ImageBlock.propTypes = {
  module: PropTypes.instanceOf(Object).isRequired,
  ...pageThemePropType,
};

export default ImageBlock;
