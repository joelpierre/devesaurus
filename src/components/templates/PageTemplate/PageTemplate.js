import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './PageTemplate.module.scss';
import * as pageActions from '../../../store/actions/page.actions';
import { mapOverACFComponents } from '../../../utils';
import { CoreLayout } from '../../../layouts/CoreLayout';
import AcfComponents from '../../../hoc/AcfComponents';
import PageHero from '../../organisms/PageHero/PageHero';

export class PageTemplate extends PureComponent {
  componentDidMount() {
    const { onGetPage, pageContext } = this.props;
    onGetPage(pageContext);
  }

  componentDidUpdate(prevProps) {
    const { pageData } = this.props;

    /* istanbul ignore else */
    if (pageData && pageData !== prevProps.pageData) {
      const { components } = pageData.acf;
      /* istanbul ignore else */
      if (components) mapOverACFComponents(components);
    }
  }

  componentWillUnmount() {
    const { clearPageData } = this.props;
    clearPageData();
  }

  render() {
    const { pageData, pageContext } = this.props;

    // console.log(pageContext);

    return (
      <CoreLayout
        title={pageContext.title}
        description={pageContext.yoast_meta.yoast_wpseo_metadesc}
        data-test="template-page"
        classes={classNames([
          styles.page,
          `page__${pageContext.slug.replace('_', '-')}`,
        ])}
      >
        <PageHero />
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

PageTemplate.defaultProps = {
  pageContext: null,
  pageData: null,
};

PageTemplate.propTypes = {
  pageContext: PropTypes.instanceOf(Object),
  pageData: PropTypes.instanceOf(Object),
  onGetPage: PropTypes.func.isRequired,
  clearPageData: PropTypes.func.isRequired,
};

/* istanbul ignore next */
const mapStateToProps = state => ({
  pageData: state.page,
});

/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
  onGetPage: data => dispatch(pageActions.getPageData(data.slug)),
  clearPageData: () => dispatch(pageActions.clearPageData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageTemplate);
