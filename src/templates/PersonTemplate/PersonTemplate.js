import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './PersonTemplate.module.scss';
import * as personActions from '../../store/actions/team.actions';
import { mapOverACFComponents } from '../../utils';

import { CoreLayout } from '../../layouts/CoreLayout';
import AcfComponents from '../../hoc/AcfComponents';

export class PersonTemplate extends PureComponent {
  componentDidMount() {
    const { onGetPerson, pageContext } = this.props;
    onGetPerson(pageContext);
  }

  componentDidUpdate(prevProps) {
    const { pageData } = this.props;

    if (pageData && pageData !== prevProps.pageData) {
      const { components } = pageData.acf;
      if (components) mapOverACFComponents(components);
    }
  }

  componentWillUnmount() {
    const { clearPersonData } = this.props;
    clearPersonData();
  }

  render() {
    const { pageData, pageContext, isMenuOpen } = this.props;

    return (
      <CoreLayout
        title={pageContext.title}
        description={pageContext.yoast_meta.yoast_wpseo_metadesc}
        data-test="template-person"
        className={classNames([
          styles.person,
          `person__${pageContext.slug.replace('_', '-')}`,
        ])}
        isMenuOpen={isMenuOpen}
      >
        {pageData &&
          pageData.acf.components.map((component, index) => {
            return (
              <AcfComponents
                component={component}
                pageTheme={pageData.acf.page_theme}
                key={index}
              />
            );
          })}
      </CoreLayout>
    );
  }
}

PersonTemplate.defaultProps = {
  pageContext: null,
  pageData: null,
};

PersonTemplate.propTypes = {
  pageContext: PropTypes.instanceOf(Object),
  pageData: PropTypes.instanceOf(Object),
  onGetPerson: PropTypes.func.isRequired,
  clearPersonData: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

/* istanbul ignore next */
const mapStateToProps = ({ person, core: { isMenuOpen } }) => ({
  pageData: person,
  isMenuOpen,
});

/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
  onGetPerson: data => dispatch(personActions.getPersonData(data.slug)),
  clearPersonData: () => dispatch(personActions.clearPersonData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonTemplate);
