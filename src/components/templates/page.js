import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as pageActions from '../../store/actions/page.actions';

import { mapOverACFComponents } from '../../utils';

import AcfComponents from '../../hoc/acfComponents';
import CoreLayout from '../../layouts/core';

export class UnconnectedPageTemplate extends PureComponent {
  componentDidMount() {
    const { onGetPage, pageContext } = this.props;
    onGetPage(pageContext);
  }

  componentDidUpdate(prevProps) {
    const { pageData } = this.props;

    if (pageData && pageData !== prevProps.pageData) {
      const { components } = pageData.acf.components;
      if (components) mapOverACFComponents(components);
    }
  }

  componentWillUnmount() {
    const { clearPageData } = this.props;
    clearPageData();
  }

  render() {
    const { pageData, pageContext } = this.props;

    return (
      <CoreLayout
        metaTitle={pageContext.title}
        data-test="component-page-template"
      >
        {pageData && (
          <>
            {pageData.acf &&
              pageData.acf.components.map((component, index) => {
                return (
                  <AcfComponents
                    component={component}
                    pageTheme={pageData.acf.page_theme}
                    key={index}
                  />
                );
              })}
          </>
        )}
      </CoreLayout>
    );
  }
}

UnconnectedPageTemplate.defaultProps = {
  pageContext: null,
  pageData: null,
};

UnconnectedPageTemplate.propTypes = {
  pageContext: PropTypes.instanceOf(Object),
  pageData: PropTypes.instanceOf(Object),
  onGetPage: PropTypes.func.isRequired,
  clearPageData: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  pageData: state.page,
});

const mapDispatchToProps = dispatch => ({
  onGetPage: data => dispatch(pageActions.getPageData(data.slug)),
  clearPageData: () => dispatch(pageActions.clearPageData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedPageTemplate);
