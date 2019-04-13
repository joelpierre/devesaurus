import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as wordActions from '../../store/actions/word.actions';

import CoreLayout from '../../layouts/core';
import sortWordObj from '../../helpers/sortWordObj';
import Heading from '../core/Heading/Heading';
import CoreSection from '../core/CoreSection/CoreSection';
import GridContainer from '../core/GridContainer/GridContainer';
import GridRow from '../core/GridRow/GridRow';
import GridColumn from '../core/GridColumn/GridColumn';

export class UnconnectedWordTemplate extends PureComponent {
  componentDidMount() {
    const { onGetWord, pageContext } = this.props;
    onGetWord(pageContext);
  }

  componentDidUpdate(prevProps) {
    const { wordData } = this.props;

    if (wordData && wordData !== prevProps.wordData) {
      sortWordObj(wordData);
    }
  }

  componentWillUnmount() {
    const { clearWordData } = this.props;
    clearWordData();
  }

  render() {
    const { wordData } = this.props;

    return (
      <CoreLayout data-test="component-word-template">
        {wordData && (
          <CoreSection>
            <GridContainer>
              <GridRow>
                <GridColumn classes="flex">
                  <Heading priority="1" classes="text-center mt-1">
                    {wordData.title}
                  </Heading>
                </GridColumn>
              </GridRow>
            </GridContainer>
          </CoreSection>
        )}
      </CoreLayout>
    );
  }
}

UnconnectedWordTemplate.defaultProps = {
  pageContext: null,
  wordData: null,
};

UnconnectedWordTemplate.propTypes = {
  pageContext: PropTypes.instanceOf(Object),
  wordData: PropTypes.instanceOf(Object),
  onGetWord: PropTypes.func.isRequired,
  clearWordData: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  wordData: state.word,
});

const mapDispatchToProps = dispatch => ({
  onGetWord: data => dispatch(wordActions.getWordData(data.slug)),
  clearWordData: () => dispatch(wordActions.clearWordData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedWordTemplate);
