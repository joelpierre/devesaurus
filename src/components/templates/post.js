import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as postActions from '../../store/actions/post.actions';
import * as coreActions from '../../store/actions/core.actions';

import { mapOverACFComponents } from '../../utils';

import AcfComponents from '../../hoc/acfComponents';
import CoreLayout from '../../layouts/core';

class PostTemplate extends PureComponent {
  componentDidMount() {
    const { onGetSiteMeta, onGetPost, pageContext } = this.props;
    onGetSiteMeta();
    onGetPost(pageContext);
  }

  componentDidUpdate(prevProps) {
    const { postData } = this.props;

    if (postData && postData !== prevProps.postData) {
      const { components } = postData.acf.components;
      if (components) mapOverACFComponents(components);
    }
  }

  componentWillUnmount() {
    const { clearPostData } = this.props;
    clearPostData();
  }

  render() {
    const { postData } = this.props;

    return (
      <CoreLayout>
        <h1 className="text-center">
          {postData && postData.title}
        </h1>
        {postData && postData.acf.components.map((component, index) => {
          return (<AcfComponents component={component} pageTheme="brand" key={index}/>);
        })}
      </CoreLayout>
    );
  }
}

PostTemplate.defaultProps = {
  pageContext: null,
  postData: null,
};

PostTemplate.propTypes = {
  pageContext: PropTypes.instanceOf(Object),
  postData: PropTypes.instanceOf(Object),
  onGetPost: PropTypes.func.isRequired,
  onGetSiteMeta: PropTypes.func.isRequired,
  clearPostData: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  postData: state.post.data,
});

const mapDispatchToProps = dispatch => ({
  onGetPost: data => dispatch(postActions.getPostData(data.slug)),
  onGetSiteMeta: () => dispatch(coreActions.getSiteMeta()),
  clearPostData: () => dispatch(postActions.clearPostData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostTemplate);
