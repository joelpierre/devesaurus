import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Heading from '../../core/Heading/Heading';
import { CoreLayout } from '../../../layouts/CoreLayout';
import Section from '../../core/Section/Section';
import Container from '../../core/Container/Container';
import Row from '../../core/Row/Row';
import Flex from '../../core/Flex/Flex';
import styles from './ArchiveTemplate.module.scss';

export class ArchiveTemplate extends PureComponent {
  render() {
    const { pageContext } = this.props;

    // console.log(pageContext);

    return (
      <CoreLayout
        title={pageContext.name}
        description=""
        data-test="template-archive"
        classes={classNames([
          styles.archive,
          styles[`archive__${pageContext.taxonomy.replace('_', '-')}`],
        ])}
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

ArchiveTemplate.defaultProps = {
  pageContext: null,
};

ArchiveTemplate.propTypes = {
  pageContext: PropTypes.instanceOf(Object),
};

export default ArchiveTemplate;
