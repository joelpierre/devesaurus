import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as pageActions from '../../store/actions/page.actions';
import * as coreActions from '../../store/actions/core.actions';

import { mapOverACFComponents } from '../../utils';

import AcfComponents from '../../hoc/acfComponents';
import CoreLayout from '../../layouts/core';


class PageTemplate extends PureComponent {
  componentDidMount() {
    const { onGetSiteMeta, onGetPage, pageContext } = this.props;
    onGetSiteMeta();
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
      <CoreLayout>
        {pageData && pageData.acf.components.map((component, index) => {
          return (<AcfComponents component={component} pageTheme={pageContext.acf.page_theme} key={index}/>);
        })}
      </CoreLayout>
    );
  }
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
