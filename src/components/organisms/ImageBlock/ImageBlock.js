import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Section from '../../../shared/Section/Section';
import Container from '../../../shared/Container/Container';
import Row from '../../../shared/Row/Row';
import Flex from '../../../shared/Flex/Flex';
import Heading from '../../../shared/Heading/Heading';
import styles from '../CtaBanner/CtaBanner.module.scss';
import { defaultPageTheme, pageThemePropType } from '../../../utils/propTypes';

const ImageBlock = ({ module, pageTheme }) => {
  return (
    <Section
      data-test="component-image-block"
      className={classNames([
        `theme--${module.theme ? module.theme : pageTheme}`,
        styles['image-block'],
      ])}
    >
      <Container className="container-fluid">
        <Row className="row">
          <Flex className="flex text-center">
            <Heading priority="2">Image Block</Heading>
          </Flex>
        </Row>
      </Container>
    </Section>
  );
};

ImageBlock.defaultProps = {
  ...defaultPageTheme(),
};

ImageBlock.propTypes = {
  module: PropTypes.instanceOf(Object).isRequired,
  ...pageThemePropType,
};

export default ImageBlock;
