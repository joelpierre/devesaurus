import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'gatsby';

import styles from './PrimaryFooter.module.scss';
import Container from '../../core/Container/Container';
import Row from '../../core/Row/Row';
import Flex from '../../core/Flex/Flex';
import TermsMenu from '../../molecules/TermsMenu/TermsMenu';
import Brand from '../../atoms/Brand/Brand';
import SocialMenu from '../../molecules/SocialMenu/SocialMenu';
import Heading from '../../core/Heading/Heading';
import FeaturedWordsList from '../../molecules/FeaturedWordsList/FeaturedWordsList';
import LabelCloud from '../../molecules/LabelCloud/LabelCloud';

const PrimaryFooter = ({ company }) => {
  return (
    <footer
      data-test="component-primary-footer"
      className={styles['primary-footer']}
    >
      <Container fluid>
        <Row classes={classNames([styles['primary-footer--top']])}>
          <Flex colLg={4} colMd={6}>
            <Link to="/">
              <Brand
                left
                type="text"
                classes={classNames(styles['primary-footer__brand'], 'mb-2')}
              />
            </Link>

            <p className={classNames(styles['primary-footer__copy'])}>
              Get real-world definitions to complex dev terms | Supported by{' '}
              <a
                className={styles['primary-footer__link']}
                href="http://www.jppdesigns.co.uk"
              >
                JPPdesigns Web design &amp; Development
              </a>
            </p>

            <SocialMenu classes="mt-3" />
          </Flex>

          <Flex colLg={3} classes="mx-auto">
            <Heading
              priority={5}
              classes={classNames(styles['primary-footer__heading'])}
            >
              Featured Words
            </Heading>
            <FeaturedWordsList />
          </Flex>

          <Flex colLg={4} colMd={6} classes="ml-auto">
            <Heading
              priority={5}
              classes={classNames(
                styles['primary-footer__heading'],
                'display-none'
              )}
            >
              Word Tags
            </Heading>
            <div className={styles['primary-footer__tag-cloud-wrapper']}>
              <LabelCloud
                classes={styles['primary-footer__tag-cloud']}
                taxonomy="word_tag"
              />
            </div>
          </Flex>
        </Row>

        <Row classes={classNames([styles['primary-footer--bottom']])}>
          <Flex colLg={5} classes={styles['primary-footer__legal']}>
            <h6 className={styles['primary-footer__legal-copy']}>
              &copy;{' '}
              {`${company} ${new Date().getFullYear()} | Developed by: Joel Pierre-Powell`}
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
