import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SEO from '../utils/seo';
import * as coreActions from '../store/actions/core.actions';
import Brand from '../components/atoms/Brand/Brand';
import Button from '../components/molecules/Buttons/Button';
import InputGroup from '../components/molecules/InputGroup/InputGroup';
import FormField from '../components/molecules/FormField/FormField';

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
      <main className="primary-main primary-main--home">
        <section className="primary-main__section core-search">
          <div className="container">
            <div className="row">
              <div className="flex-md-8">
                <h1>Devasaurus</h1>
                <FormField name="home-search" type="text" placeholder="Search for a keyword"/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam ea eos laudantium minus neque
                reprehenderit tempora. Culpa cupiditate ducimus et fugiat, iure molestias nisi omnis praesentium, qui
                saepe, temporibus!
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
