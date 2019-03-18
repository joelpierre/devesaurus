import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SEO from '../utils/seo';
import * as coreActions from '../store/actions/core.actions';
import Brand from '../components/atoms/Brand/Brand';

function Index(
  {
    onGetSiteMeta,
    onGetSiteOptions,
    siteOptions,
    siteMeta,
  },
) {
  /**
   * React Hook - Replaces componentDidMount() we pass and empty array as the second
   * argument in order to only fire it once.
   */
  useEffect(() => {
    onGetSiteMeta();
    onGetSiteOptions();
  }, []);

  return (
    <>
      {siteOptions && (
        <SEO
          title={`${siteOptions.company_name} - ${siteOptions.company_slogan}`}
          description={siteMeta.description}
        />
      )}

      <Brand/>

      <main className="primary-main primary-main--home">
        <section className="primary-main__section core-search">
          <div className="container-fluid">
            <div className="row">
              <div className="flex">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cumque expedita perferendis quam
                reiciendis reprehenderit suscipit ullam vel? Autem delectus in itaque, iusto officiis ratione rem saepe
                vero vitae voluptatem.
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

Index.defaultProps = {
  siteOptions: null,
  siteMeta: null,
};

Index.propTypes = {
  onGetSiteMeta: PropTypes.func.isRequired,
  onGetSiteOptions: PropTypes.func.isRequired,
  siteMeta: PropTypes.instanceOf(Object),
  siteOptions: PropTypes.instanceOf(Object),
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
