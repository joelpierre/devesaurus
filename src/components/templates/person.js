import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as personActions from '../../store/actions/team.actions';
import * as coreActions from '../../store/actions/core.actions';

import { mapOverACFComponents } from '../../utils';

import AcfComponents from '../../hoc/acfComponents';
import CoreLayout from '../../layouts/core';

export class UnconnectedPersonTemplate extends PureComponent {
  componentDidMount() {
    const { onGetSiteMeta, onGetPerson, pageContext } = this.props;
    onGetSiteMeta();
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
    const { personData } = this.props;

    return (
      <CoreLayout data-test="component-person-template">
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

UnconnectedPersonTemplate.defaultProps = {
  pageContext: null,
  personData: null,
};

UnconnectedPersonTemplate.propTypes = {
  pageContext: PropTypes.instanceOf(Object),
  personData: PropTypes.instanceOf(Object),
  onGetPerson: PropTypes.func.isRequired,
  onGetSiteMeta: PropTypes.func.isRequired,
  clearPersonData: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  personData: state.post.data,
});

const mapDispatchToProps = dispatch => ({
  onGetPerson: data => dispatch(personActions.getPersonData(data.slug)),
  onGetSiteMeta: () => dispatch(coreActions.getSiteMeta()),
  clearPersonData: () => dispatch(personActions.clearPersonData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedPersonTemplate);
