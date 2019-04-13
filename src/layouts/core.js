import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PrimaryHeader from '../components/organisms/PrimaryHeader/PrimaryHeader';
import PrimaryFooter from '../components/organisms/PrimaryFooter/PrimaryFooter';
import SEO from '../utils/seo';
import { getSiteMeta } from '../store/actions';

class CoreLayout extends PureComponent {
  componentDidMount() {
    const { onGetSiteMeta } = this.props;
    onGetSiteMeta();
  }

  render() {
    const { children, title, description } = this.props;

    return (
      <React.Fragment>
        <SEO title={title} description={description} />
        <PrimaryHeader />
        <main className="primary-main">{children}</main>
        <PrimaryFooter />
      </React.Fragment>
    );
  }
}

CoreLayout.defaultProps = {
  title: 'Default Title',
  description: 'Default description',
  children: null,
};

CoreLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.instanceOf(Object),
  onGetSiteMeta: PropTypes.func.isRequired,
};

const mapStateToProps = ({ core: { title, description } }) => ({
  title,
  description,
});

export default connect(
  mapStateToProps,
  { onGetSiteMeta: getSiteMeta }
)(CoreLayout);
