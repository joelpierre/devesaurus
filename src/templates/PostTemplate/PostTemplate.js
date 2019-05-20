import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './PostTemplate.module.scss';
import * as postActions from '../../store/actions/post.actions';
import { mapOverACFComponents } from '../../utils';
import Heading from '../../components/core/Heading/Heading';
import { CoreLayout } from '../../layouts/CoreLayout';
import AcfComponents from '../../hoc/AcfComponents';

export class PostTemplate extends PureComponent {
  componentDidMount() {
    const { onGetPost, pageContext } = this.props;
    onGetPost(pageContext);
  }

  componentDidUpdate(prevProps) {
    const { pageData } = this.props;

    if (pageData && pageData !== prevProps.pageData) {
      const { components } = pageData.acf;
      if (components) mapOverACFComponents(components);
    }
  }

  componentWillUnmount() {
    const { clearPostData } = this.props;
    clearPostData();
  }

  render() {
    const { pageData, pageContext, isMenuOpen } = this.props;

    return (
      <CoreLayout
        title={pageContext.title}
        description={pageContext.yoast_meta.yoast_wpseo_metadesc}
        data-test="template-post"
        classes={classNames([
          styles.post,
          `post__${pageContext.slug.replace('_', '-')}`,
        ])}
        isMenuOpen={isMenuOpen}
      >
        <Heading priority="1" classes="text-center">
          {pageContext.title}
        </Heading>

        {pageData && (
          <>
            {pageData.acf &&
              pageData.acf.components.map((component, index) => {
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
  pageData: null,
};

PostTemplate.propTypes = {
  pageContext: PropTypes.instanceOf(Object),
  pageData: PropTypes.instanceOf(Object),
  onGetPost: PropTypes.func.isRequired,
  clearPostData: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

/* istanbul ignore next */
const mapStateToProps = ({ post, core: { isMenuOpen } }) => ({
  pageData: post,
  isMenuOpen,
});

/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
  onGetPost: data => dispatch(postActions.getPostData(data.slug)),
  clearPostData: () => dispatch(postActions.clearPostData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostTemplate);
