import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from '../PostTemplate/PostTemplate.module.scss';
import * as wordActions from '../../store/actions/word.actions';
import Heading from '../../components/core/Heading/Heading';
import Section from '../../components/core/Section/Section';
import Container from '../../components/core/Container/Container';
import Row from '../../components/core/Row/Row';
import Flex from '../../components/core/Flex/Flex';
import { CoreLayout } from '../../layouts/CoreLayout';
import { sortWordObj } from '../../utils';
import FormBase from '../../components/molecules/FormBase/FormBase';

export class WordTemplate extends PureComponent {
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
    const { pageContext } = this.props;

    return (
      <CoreLayout
        title={pageContext.title}
        headerTitle={`${pageContext.title} <span class="ml-1">[${
          pageContext.acf.pronunciation
        }]</span>`}
        description={pageContext.yoast_meta.yoast_wpseo_metadesc}
        data-test="template-word"
        classes={classNames([
          styles.word,
          `word__${pageContext.slug.replace('_', '-')}`,
        ])}
      >
        <Section>
          <Container>
            <Row>
              <Flex classes="flex">
                <Heading priority="1" classes="text-center mt-1">
                  {pageContext.title}
                </Heading>

                <FormBase />
              </Flex>
            </Row>
          </Container>
        </Section>
      </CoreLayout>
    );
  }
}

WordTemplate.defaultProps = {
  pageContext: null,
  wordData: null,
};

WordTemplate.propTypes = {
  pageContext: PropTypes.instanceOf(Object),
  wordData: PropTypes.instanceOf(Object),
  onGetWord: PropTypes.func.isRequired,
  clearWordData: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  wordData: state.word,
});

/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
  onGetWord: data => dispatch(wordActions.getWordData(data.slug)),
  clearWordData: () => dispatch(wordActions.clearWordData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WordTemplate);
