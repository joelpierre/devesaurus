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

const PrimaryFooter = ({ company }) => {
  return (
    <footer
      data-test="component-primary-footer"
      className={styles['primary-footer']}
    >
      <div className={classNames([styles['primary-footer--top']])}>
        <Container fluid>
          <Row>
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

            <Flex colLg={3} colMd={6}>
              <Heading
                priority={5}
                className={classNames(styles['primary-footer__heading'])}
              >
                Devesaurus
              </Heading>
              <Heading
                priority={6}
                className={classNames(styles['primary-footer__legal-copy'])}
                innerHTML={false}
              >
                Get real-world definitions for complex dev and creative industry
                terms.
              </Heading>

              <Heading
                priority={6}
                className={classNames(
                  styles['primary-footer__legal-copy'],
                  'mt-2'
                )}
                innerHTML={false}
              >
                &copy;{' '}
                {`${company} ${new Date().getFullYear()} | Developed by: Joel Pierre-Powell`}
                {' | Supported by'}{' '}
                <a
                  className={styles['primary-footer__link']}
                  href="http://www.jppdesigns.co.uk"
                >
                  JPPdesigns Web design &amp; Development
                </a>
              </Heading>

              <SocialMenu
                className={classNames('mt-3', styles['primary-footer__social'])}
              />
            </Flex>
          </Row>
        </Container>
      </div>

      <div className={classNames([styles['primary-footer--bottom']])}>
        <Container fluid>
          <Row>
            <Flex
              colLg={5}
              colMd={5}
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

            <Flex colLg={7} colMd={7} className="display-flex">
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
