import React, { useEffect } from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as pageActions from '../../store/actions/page.actions';

import CoreLayout from '../../layouts/core';
import { mapOverACFComponents } from '../../shared/utility';
import AcfComponents from '../../hoc/acfComponents';


function PageTemplate({ pageContext, onGetPage }) {
  const acfFields = pageContext.acf;
  const components = acfFields.components_page;

  /**
   * React Hook - Replaces componentDidMount() we pass and empty array as the second
   * argument in order to only fire it once.
   */
  useEffect(() => {
    onGetPage(pageContext);
  }, []);

  /**
   * React Hook - Fires when onGetPage has been executed. Once the store is updated we
   * cycle over the components and rerender.
   */
  useEffect(() => {
    if (components) {
      mapOverACFComponents(components);
    }
  }, [onGetPage]);

  return (
    <CoreLayout>
      {components ? components.map((component, index) => {
        return (
          <AcfComponents component={component} key={index}/>
        );
      }) : null}
    </CoreLayout>
  );
}

PageTemplate.propTypes = {
  pageContext: PropTypes.instanceOf(Object).isRequired,
  onGetPage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  pageData: state.page.data,
});

const mapDispatchToProps = dispatch => ({
  onGetPage: pageData => dispatch(pageActions.getPageData(pageData.slug)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageTemplate);
