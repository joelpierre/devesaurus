import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './PrimaryFooter.module.scss';
import Container from '../../core/Container/Container';
import Row from '../../core/Row/Row';
import Flex from '../../core/Flex/Flex';

const PrimaryFooter = ({ company }) => {
  // console.log();
  return (
    <footer
      data-test="component-primary-footer"
      className={styles['primary-footer']}
    >
      <Container>
        <Row classes={classNames([styles['primary-footer--top']])}>
          <Flex colLg={4} colMd={6}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            assumenda cupiditate eius eum ex expedita facilis ipsum, iste minus
            modi nobis nulla quae quas quia quisquam reprehenderit similique
            tenetur voluptatum.
          </Flex>

          <Flex colLg={4} colMd={6}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            assumenda cupiditate eius eum ex expedita facilis ipsum, iste minus
            modi nobis nulla quae quas quia quisquam reprehenderit similique
            tenetur voluptatum.
          </Flex>

          <Flex colLg={4} colMd={6}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            assumenda cupiditate eius eum ex expedita facilis ipsum, iste minus
            modi nobis nulla quae quas quia quisquam reprehenderit similique
            tenetur voluptatum.
          </Flex>
        </Row>

        <Row classes={classNames([styles['primary-footer--bottom']])}>
          <Flex>
            <h6 className={styles['primary-footer__legal']}>
              &copy;{' '}
              {`${company} ${new Date().getFullYear()} | Built by: Joel Pierre-Powell`}
            </h6>
          </Flex>
        </Row>
      </Container>
    </footer>
  );
};

PrimaryFooter.defaultProps = {
  company: 'Devesaurus',
};

PrimaryFooter.propTypes = {
  company: PropTypes.string,
};

export default PrimaryFooter;
