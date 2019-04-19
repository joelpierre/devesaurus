import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as wordActions from '../../store/actions/word.actions';

import CoreLayout from '../../layouts/core';
import sortWordObj from '../../helpers/sortWordObj';
import Heading from '../core/Heading/Heading';
import Section from '../core/Section/Section';
import Container from '../core/Container/Container';
import Row from '../core/Row/Row';
import Flex from '../core/Flex/Flex';

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
          <Section>
            <Container>
              <Row>
                <Flex classes="flex">
                  <Heading priority="1" classes="text-center mt-1">
                    {wordData.title}
                  </Heading>
                </Flex>
              </Row>
            </Container>
          </Section>
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
