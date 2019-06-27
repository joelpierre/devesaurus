import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';

import Heading from '../../shared/Heading/Heading';
import { CoreLayout } from '../../layouts/CoreLayout';
import Section from '../../shared/Section/Section';
import Container from '../../shared/Container/Container';
import Row from '../../shared/Row/Row';
import Flex from '../../shared/Flex/Flex';
import styles from './ArchiveTemplate.module.scss';

export class ArchiveTemplate extends PureComponent {
  render() {
    const { pageContext, isMenuOpen } = this.props;

    console.dir(pageContext.items);

    return (
      <CoreLayout
        title={pageContext.name}
        description=""
        data-test="template-archive"
        className={classNames([
          styles.archive,
          styles[`archive__${pageContext.taxonomy.replace('_', '-')}`],
        ])}
        isMenuOpen={isMenuOpen}
      >
        <Section>
          <Container>
            <Row>
              <Flex>
                <Heading priority="1" className="text-center mb-0">
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

ArchiveTemplate.defaultProps = {
  pageContext: null,
};

ArchiveTemplate.propTypes = {
  pageContext: PropTypes.instanceOf(Object),
  isMenuOpen: PropTypes.bool.isRequired,
};

/* istanbul ignore next */
const mapStateToProps = ({ core: { isMenuOpen } }) => ({
  isMenuOpen,
});

export default connect(mapStateToProps)(ArchiveTemplate);
