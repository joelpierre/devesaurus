import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as wordActions from '../../store/actions/word.actions';
import * as coreActions from '../../store/actions/core.actions';

import { mapOverACFComponents } from '../../utils';

import AcfComponents from '../../hoc/acfComponents';
import CoreLayout from '../../layouts/core';
import FormField from '../molecules/FormField/FormField';

function WordTemplate(
  {
    pageContext,
    wordData,
    onGetSiteMeta,
    onGetWord,
  },
) {
  /**
   * React Hook - Replaces componentDidMount() we pass and empty array as the second
   * argument in order to only fire it once.
   */
  useEffect(() => {
    onGetSiteMeta();
    onGetWord(pageContext);
  }, []);

  /**
   * React Hook - Fires when onGetWord has been executed. Once the store is updated we
   * cycle over the components and rerender.
   */
  useEffect(() => {
    const components = wordData && wordData.acf.components || null;

    if (components) {
      mapOverACFComponents(components);
    }
  }, [wordData]);

  return (
    <CoreLayout>
      <h1 style={{ marginTop: '10px' }} className="text-center">
        {wordData && wordData.title}
      </h1>
    </CoreLayout>
  );
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
};

const mapStateToProps = state => ({
  wordData: state.word.data,
});

const mapDispatchToProps = dispatch => ({
  onGetWord: data => dispatch(wordActions.getWordData(data.slug)),
  onGetSiteMeta: () => dispatch(coreActions.getSiteMeta()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WordTemplate);
