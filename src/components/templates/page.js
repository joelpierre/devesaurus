import React, { useEffect } from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as pageActions from '../../store/actions/page.actions';
import * as coreActions from '../../store/actions/core.actions';

import CoreLayout from '../../layouts/core';
import { mapOverACFComponents } from '../../utilities';
import AcfComponents from '../../hoc/acfComponents';
import SEO from '../../utilities/seo';

function setMetaData() {

}

function PageTemplate(
  {
    pageContext,
    pageData,
    onGetSiteMeta,
    onGetPage,
  },
) {
  const pageTheme = pageContext.acf.page_theme;
  const components = pageContext.acf.components_page;
  const metaTitle = pageContext.yoast_meta.yoast_wpseo_title;
  const metaDescription = pageContext.yoast_meta.yoast_wpseo_metadesc;

  /**
   * React Hook - Replaces componentDidMount() we pass and empty array as the second
   * argument in order to only fire it once.
   */
  useEffect(() => {
    onGetSiteMeta();
    onGetPage(pageContext);
  }, []);

  /**
   * React Hook - Fires when onGetPage has been executed. Once the store is updated we
   * cycle over the components and rerender.
   */
  useEffect(() => {
    setMetaData();
    if (components) {
      mapOverACFComponents(components);
    }
  }, [pageData]);

  return (
    <CoreLayout>
      <SEO title={metaTitle} description={metaDescription}/>
      {components && components.map((component, index) => {
        return (<AcfComponents component={component} pageTheme={pageTheme} key={index}/>);
      })}
    </CoreLayout>
  );
}

PageTemplate.defaultProps = {
  pageData: null,
};

PageTemplate.propTypes = {
  pageContext: PropTypes.instanceOf(Object).isRequired,
  pageData: PropTypes.instanceOf(Object),
  onGetPage: PropTypes.func.isRequired,
  onGetSiteMeta: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  pageData: state.page.data,
});

const mapDispatchToProps = dispatch => ({
  onGetPage: pageData => dispatch(pageActions.getPageData(pageData.slug)),
  onGetSiteMeta: () => dispatch(coreActions.getSiteMeta()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageTemplate);
