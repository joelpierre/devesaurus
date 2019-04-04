import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as pageActions from '../../store/actions/page.actions';
import * as coreActions from '../../store/actions/core.actions';

import { mapOverACFComponents } from '../../utils';

import AcfComponents from '../../hoc/acfComponents';
import CoreLayout from '../../layouts/core';
import FormField from '../molecules/FormField/FormField';

function PageTemplate(
  {
    pageContext,
    pageData,
    onGetSiteMeta,
    onGetPage,
    clearPageData,
  },
) {
  /**
   * React Hook - Replaces componentDidMount() we pass and empty array as the second
   * argument in order to only fire it once.
   */
  useEffect(() => {
    onGetSiteMeta();
    onGetPage(pageContext);

    return () => {
      clearPageData();
    };
  }, []);

  /**
   * React Hook - Fires when onGetPage has been executed. Once the store is updated we
   * cycle over the components and rerender.
   */
  useEffect(() => {
    const components = pageData && pageData.acf.components || null;
    if (components) mapOverACFComponents(components);
  }, [pageData]);

  return (
    <CoreLayout>
      <h1 style={{ marginTop: '10px' }} className="text-center">
        {pageData && pageData.title}
      </h1>

      <FormField type="date" name="test" placeholder="Test placeholder"/>

      <FormField type="file" name="test" placeholder="Test placeholder"/>

      {pageData && pageData.acf.components.map((component, index) => {
        return (<AcfComponents component={component} pageTheme={pageContext.acf.page_theme} key={index}/>);
      })}
    </CoreLayout>
  );
}

PageTemplate.defaultProps = {
  pageContext: null,
  pageData: null,
};

PageTemplate.propTypes = {
  pageContext: PropTypes.instanceOf(Object),
  pageData: PropTypes.instanceOf(Object),
  onGetPage: PropTypes.func.isRequired,
  onGetSiteMeta: PropTypes.func.isRequired,
  clearPageData: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  pageData: state.page.data,
});

const mapDispatchToProps = dispatch => ({
  onGetPage: data => dispatch(pageActions.getPageData(data.slug)),
  onGetSiteMeta: () => dispatch(coreActions.getSiteMeta()),
  clearPageData: () => dispatch(pageActions.clearPageData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageTemplate);
