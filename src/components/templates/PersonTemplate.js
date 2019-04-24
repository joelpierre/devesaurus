import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
    const { personData } = this.props;

    if (personData && personData !== prevProps.personData) {
      const { components } = personData.acf.components;
      if (components) mapOverACFComponents(components);
    }
  }

  componentWillUnmount() {
    const { clearPersonData } = this.props;
    clearPersonData();
  }

  render() {
    const { personData, pageContext } = this.props;

    return (
      <CoreLayout
        title={pageContext.title}
        description={pageContext.yoast_meta.yoast_wpseo_metadesc}
        data-test="component-person-template"
      >
        {personData &&
          personData.acf.components.map((component, index) => {
            return (
              <AcfComponents
                component={component}
                pageTheme={personData.acf.page_theme}
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
  personData: null,
};

PersonTemplate.propTypes = {
  pageContext: PropTypes.instanceOf(Object),
  personData: PropTypes.instanceOf(Object),
  onGetPerson: PropTypes.func.isRequired,
  clearPersonData: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  personData: state.Post.data,
});

const mapDispatchToProps = dispatch => ({
  onGetPerson: data => dispatch(personActions.getPersonData(data.slug)),
  clearPersonData: () => dispatch(personActions.clearPersonData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonTemplate);
