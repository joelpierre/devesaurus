import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as postActions from '../../store/actions/post.actions';

import { mapOverACFComponents } from '../../utils';

import AcfComponents from '../../hoc/acfComponents';
import Heading from '../core/Heading/Heading';
import { CoreLayout } from '../../layouts/CoreLayout';

export class PostTemplate extends PureComponent {
  componentDidMount() {
    const { onGetPost, pageContext } = this.props;
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
      <CoreLayout data-test="component-post-template">
        {postData && (
          <>
            <Heading priority="1" classes="text-center">
              {postData.title}
            </Heading>

            {postData.acf &&
              postData.acf.components.map((component, index) => {
                return (
                  <AcfComponents
                    component={component}
                    pageTheme="brand"
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

PostTemplate.defaultProps = {
  pageContext: null,
  postData: null,
};

PostTemplate.propTypes = {
  pageContext: PropTypes.instanceOf(Object),
  postData: PropTypes.instanceOf(Object),
  onGetPost: PropTypes.func.isRequired,
  clearPostData: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  postData: state.post,
});

const mapDispatchToProps = dispatch => ({
  onGetPost: data => dispatch(postActions.getPostData(data.slug)),
  clearPostData: () => dispatch(postActions.clearPostData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostTemplate);
