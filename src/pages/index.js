import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SEO from '../utils/seo';
import * as coreActions from '../store/actions/core.actions';
import FeaturedWords from '../components/organisms/FeaturedWords/FeaturedWords';
import { mockWords } from '../../__mocks__/mock-words';
import HeroSearch from '../components/organisms/HeroSearch/HeroSearch';

export class UnconnectedIndex extends PureComponent {
  componentDidMount() {
    const { onGetSiteMeta, onGetSiteOptions } = this.props;

    onGetSiteMeta();
    onGetSiteOptions();
  }

  render() {
    const { siteOptions, siteMeta } = this.props;

    const title = siteOptions && siteOptions.company_name;

    return (
      <>
        {siteOptions && siteMeta ? (
          <SEO
            title={`${siteOptions.company_name} - ${
              siteOptions.company_slogan
            }`}
            description={siteMeta.description}
          />
        ) : null}
        <main className="primary-main primary-main--home">
          <HeroSearch title={title} />
          <FeaturedWords words={mockWords} />
        </main>
      </>
    );
  }
}

UnconnectedIndex.defaultProps = {
  siteOptions: null,
  siteMeta: null,
};

UnconnectedIndex.propTypes = {
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
)(UnconnectedIndex);
