import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SEO from '../utils/seo';
import * as coreActions from '../store/actions/core.actions';
import FeaturedWords from '../components/organisms/FeaturedWords/FeaturedWords';
import { mockWords } from '../../__mocks__/mock-words';
import HeroSearch from '../components/organisms/HeroSearch/HeroSearch';

function Index({ onGetSiteMeta, onGetSiteOptions, siteOptions, siteMeta }) {
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
        <HeroSearch title={siteOptions && siteOptions.company_name} />

        <FeaturedWords words={mockWords} />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
