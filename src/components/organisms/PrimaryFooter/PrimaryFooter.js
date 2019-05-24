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
      <div className={classNames([styles['primary-footer--top']])}>
        <Container>
          <Row>
            <Flex colLg={4} colMd={5}>
              <Heading
                priority={5}
                className={classNames(styles['primary-footer__heading'])}
              >
                About
              </Heading>
              <Heading
                priority={6}
                className={classNames(styles['primary-footer__legal-copy'])}
                innerHTML={false}
              >
                Get real-world definitions to complex dev terms | Supported by{' '}
                <a
                  className={styles['primary-footer__link']}
                  href="http://www.jppdesigns.co.uk"
                >
                  JPPdesigns Web design &amp; Development
                </a>{' '}
                | &copy;{' '}
                {`${company} ${new Date().getFullYear()} | Developed by: Joel Pierre-Powell`}
              </Heading>

              <SocialMenu
                className={classNames('mt-3', styles['primary-footer__social'])}
              />
            </Flex>

            <Flex colLg={3} colMd={6} className="ml-auto">
              <Heading
                priority={5}
                className={classNames(styles['primary-footer__heading'])}
              >
                Featured Words
              </Heading>
              <FeaturedWordsList
                className={classNames(styles['primary-footer__featured-words'])}
              />
            </Flex>

            <Flex colLg={4} colMd={12} className="ml-lg-auto order-lg-1">
              <Heading
                priority={5}
                className={classNames(styles['primary-footer__heading'])}
              >
                Word Tags
              </Heading>
              <div className={styles['primary-footer__tag-cloud-wrapper']}>
                <LabelCloud
                  className={styles['primary-footer__tag-cloud']}
                  taxonomy="word_tag"
                />
              </div>
            </Flex>
          </Row>
        </Container>
      </div>

      <div className={classNames([styles['primary-footer--bottom']])}>
        <Container>
          <Row>
            <Flex
              colLg={5}
              colMd={12}
              className={styles['primary-footer__legal']}
            >
              <Link to="/">
                <Brand
                  left
                  type="text"
                  className={classNames(
                    styles['primary-footer__brand'],
                    'mb-2'
                  )}
                />
              </Link>
            </Flex>

            <Flex colLg={7} colMd={12} className="display-flex">
              <TermsMenu className={styles['primary-footer__terms-menu']} />
            </Flex>
          </Row>
        </Container>
      </div>
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
