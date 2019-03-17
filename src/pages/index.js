import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SEO from '../utils/seo';
import * as coreActions from '../store/actions/core.actions';

function Index(
  {
    onGetSiteMeta,
    onGetSiteOptions,
    siteMeta,
    siteOptions,
  },
) {
  /**
   * React Hook - Replaces componentDidMount() we pass and empty array as the second
   * argument in order to only fire it once.
   */
  useEffect(() => {
    onGetSiteOptions();
    onGetSiteMeta();
  }, []);

  return (
    <>
      <SEO title={`${siteOptions.company_name} - ${siteOptions.company_slogan}`} description={siteMeta.description}/>
      <main className="primary-main primary-main--home">
        <section className="primary-main__section core-search">
          <div className="container-fluid">
            <div className="row">
              <div className="flex">

              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

Index.propTypes = {
  onGetSiteMeta: PropTypes.func.isRequired,
  onGetSiteOptions: PropTypes.func.isRequired,
  siteMeta: PropTypes.instanceOf(Object).isRequired,
  siteOptions: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  siteMeta: state.core,
  siteOptions: state.core.options,
});

const mapDispatchToProps = dispatch => ({
  onGetSiteOptions: () => dispatch(coreActions.getSiteMeta()),
  onGetSiteMeta: () => dispatch(coreActions.getSiteOptions()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Index);
