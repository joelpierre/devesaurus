import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './PageHero.module.scss';
import Container from '../../core/Container/Container';
import Flex from '../../core/Flex/Flex';
import Row from '../../core/Row/Row';
import Section from '../../core/Section/Section';
import { pageThemePropType } from '../../../utils/propTypes';

const PageHero = ({ module, pageTheme, ...props }) => {
  return (
    <Section className={classNames(styles['page-hero'])} {...props}>
      <Container fluid>
        <Row>
          <Flex>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur debitis illum non saepe voluptate. A cumque dolore
            ducimus eveniet facilis, iure maiores minima nulla, perferendis
            provident, quae repellat repudiandae voluptates.
          </Flex>
        </Row>
      </Container>
    </Section>
  );
};

PageHero.defaultProps = {};

PageHero.propTypes = {
  module: PropTypes.instanceOf(Object).isRequired,
  ...pageThemePropType,
};

export default PageHero;
