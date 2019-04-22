import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FeaturedWords from '../components/organisms/FeaturedWords/FeaturedWords';
import HeroSearch from '../components/organisms/HeroSearch/HeroSearch';
import BasicLayout from '../layouts/BasicLayout';

import { mockWords } from '../../__mocks__/mock-words';

export class Index extends PureComponent {
  componentDidMount() {}

  render() {
    return (
      <BasicLayout title="Devesaurus Home" data-test="component-index">
        <HeroSearch title="Devesaurus" />
        <FeaturedWords words={mockWords} />
      </BasicLayout>
    );
  }
}

Index.defaultProps = {};

Index.propTypes = {};

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Index);
