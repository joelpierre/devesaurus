import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './PrimaryFooter.module.scss';
import Container from '../../core/Container/Container';
import Row from '../../core/Row/Row';
import Flex from '../../core/Flex/Flex';
import TermsMenu from '../../molecules/TermsMenu/TermsMenu';
import Brand from '../../atoms/Brand/Brand';
import SocialMenu from '../../molecules/SocialMenu/SocialMenu';
import TagCloud from '../../molecules/TagCloud/TagCloud';

const PrimaryFooter = ({ company }) => {
  // console.log();
  return (
    <footer
      data-test="component-primary-footer"
      className={styles['primary-footer']}
    >
      <Container fluid>
        <Row classes={classNames([styles['primary-footer--top']])}>
          <Flex colLg={4} colMd={6}>
            <Brand left type="text" classes={styles['primary-footer__brand']} />
            <SocialMenu />
          </Flex>

          <Flex
            colLg={6}
            colMd={6}
            classes={styles['primary-footer__tag-cloud']}
          >
            <TagCloud />
          </Flex>
        </Row>

        <Row classes={classNames([styles['primary-footer--bottom']])}>
          <Flex colLg={5} classes={styles['primary-footer__legal']}>
            <h6 className={styles['primary-footer__legal-copy']}>
              &copy;{' '}
              {`${company} ${new Date().getFullYear()} | Developed by: Joel Pierre-Powell | Supported by`}{' '}
              <a
                className={styles['primary-footer__link']}
                href="http://www.jppdesigns.co.uk"
              >
                JPPdesigns Web design &amp; Development
              </a>
              {' and '}
              <a
                className={styles['primary-footer__link']}
                href="https://www.foolproof.co.uk"
              >
                Foolproof, a Zensar Company
              </a>
            </h6>
          </Flex>

          <Flex colLg={7}>
            <TermsMenu classes={styles['primary-footer__terms-menu']} />
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
