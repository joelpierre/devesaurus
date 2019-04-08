import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as wordActions from '../../store/actions/word.actions';
import * as coreActions from '../../store/actions/core.actions';

import CoreLayout from '../../layouts/core';
import sortWordObj from '../../helpers/sortWordObj';

export class UnconnectedWordTemplate extends PureComponent {
  componentDidMount() {
    const { onGetSiteMeta, onGetWord, pageContext } = this.props;
    onGetSiteMeta();
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
          <section className="primary-main__section">
            <div className="container">
              <div className="flex">
                <h1 style={{ marginTop: '10px' }} className="text-center">
                  {wordData.title}
                </h1>
              </div>
            </div>
          </section>
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
  onGetSiteMeta: PropTypes.func.isRequired,
  clearWordData: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  wordData: state.word.data,
});

const mapDispatchToProps = dispatch => ({
  onGetWord: data => dispatch(wordActions.getWordData(data.slug)),
  onGetSiteMeta: () => dispatch(coreActions.getSiteMeta()),
  clearWordData: () => dispatch(wordActions.clearWordData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedWordTemplate);
