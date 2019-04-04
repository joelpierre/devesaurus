import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as wordActions from '../../store/actions/word.actions';
import * as coreActions from '../../store/actions/core.actions';

import CoreLayout from '../../layouts/core';
import sortWordObj from '../../helpers/sortWordObj';

function WordTemplate(
  {
    pageContext,
    wordData,
    onGetSiteMeta,
    onGetWord,
    clearWordData,
  },
) {
  /**
   * React Hook - Replaces componentDidMount() we pass and empty array as the second
   * argument in order to only fire it once.
   */
  useEffect(() => {
    onGetSiteMeta();
    onGetWord(pageContext);

    return () => {
      clearWordData();
    };
  }, []);

  useEffect(() => {
    sortWordObj(wordData);
  }, [wordData]);


  if (wordData) {
    return (
      <CoreLayout>
        <section className="primary-main__section">
          <div className="container">
            <div className="flex">
              <h1 style={{ marginTop: '10px' }} className="text-center">
                {wordData.title}
              </h1>
            </div>
          </div>
        </section>
      </CoreLayout>
    );
  }

  return (<></>);
}

WordTemplate.defaultProps = {
  pageContext: null,
  wordData: null,
};

WordTemplate.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(WordTemplate);
