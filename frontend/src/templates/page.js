import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as pageActions from '../store/actions/page.actions';

import CoreLayout from '../layouts/core';

class PageTemplate extends Component {
  componentDidMount() {
    const { pageContext } = this.props;
    this.props.onGetPage(pageContext);
  }

  render() {
    const { pageContext } = this.props;

    return (
      <CoreLayout>
        <section className="primary-main__section">
          <div className="container-fluid">
            <div className="row">
              <div className="flex">
                <h1 className="heading-1" dangerouslySetInnerHTML={{ __html: pageContext.title }}/>
              </div>
            </div>
          </div>
        </section>
      </CoreLayout>
    );
  }
}

PageTemplate.propTypes = {
  pageContext: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  pageData: state.page.data,
});

const mapDispatchToProps = dispatch => ({
  onGetPage: pageData => dispatch(pageActions.getPageData(pageData.slug)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageTemplate);
