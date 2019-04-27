import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Heading from '../core/Heading/Heading';
import { CoreLayout } from '../../layouts/CoreLayout';

export class ArchiveTemplate extends PureComponent {
  render() {
    const { pageContext } = this.props;

    return (
      <CoreLayout
        title={pageContext.name}
        description=""
        data-test="template-archive"
      >
        <Heading priority="1" classes="text-center">
          {pageContext.name}
        </Heading>
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
