import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';

import Heading from '../../components/core/Heading/Heading';
import { CoreLayout } from '../../layouts/CoreLayout';
import Section from '../../components/core/Section/Section';
import Container from '../../components/core/Container/Container';
import Row from '../../components/core/Row/Row';
import Flex from '../../components/core/Flex/Flex';
import styles from './TaxonomyTemplate.module.scss';

export class TaxonomyTemplate extends PureComponent {
  render() {
    const { pageContext, isMenuOpen } = this.props;

    return (
      <CoreLayout
        title={pageContext.name}
        description=""
        data-test="template-taxonomy"
        classes={classNames([
          styles.taxonomy,
          styles[`taxonomy__${pageContext.taxonomy.replace('_', '-')}`],
        ])}
        isMenuOpen={isMenuOpen}
      >
        <Section>
          <Container>
            <Row>
              <Flex>
                <Heading priority="1" classes="text-center mb-0">
                  {pageContext.name}
                </Heading>
              </Flex>
            </Row>
          </Container>
        </Section>
      </CoreLayout>
    );
  }
}

TaxonomyTemplate.defaultProps = {
  pageContext: null,
};

TaxonomyTemplate.propTypes = {
  pageContext: PropTypes.instanceOf(Object),
  isMenuOpen: PropTypes.bool.isRequired,
};

/* istanbul ignore next */
const mapStateToProps = ({ core: { isMenuOpen } }) => ({
  isMenuOpen,
});

export default connect(mapStateToProps)(TaxonomyTemplate);
