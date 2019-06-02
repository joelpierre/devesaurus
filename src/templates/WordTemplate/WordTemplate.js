import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './WordTemplate.module.scss';

import * as wordActions from '../../store/actions/word.actions';
import Heading from '../../components/core/Heading/Heading';
import Section from '../../components/core/Section/Section';
import Container from '../../components/core/Container/Container';
import Row from '../../components/core/Row/Row';
import Flex from '../../components/core/Flex/Flex';
import { CoreLayout } from '../../layouts/CoreLayout';
import { sortWordObj } from '../../utils';

export class WordTemplate extends PureComponent {
  componentDidMount() {
    const { onGetWord, pageContext } = this.props;
    onGetWord(pageContext);
  }

  componentDidUpdate(prevProps) {
    const { pageData } = this.props;

    if (pageData && pageData !== prevProps.pageData) {
      sortWordObj(pageData);
    }
  }

  componentWillUnmount() {
    const { clearWordData } = this.props;
    clearWordData();
  }

  render() {
    const { pageContext, isMenuOpen } = this.props;

    return (
      <CoreLayout
        title={pageContext.title}
        headerTitle={`${pageContext.title} <span>:: definition</span>`}
        description={pageContext.yoast_meta.yoast_wpseo_metadesc}
        data-test="template-word"
        className={classNames([
          styles.word,
          `word__${pageContext.slug.replace('_', '-')}`,
        ])}
        isMenuOpen={isMenuOpen}
      >
        <Section contrast>
          <Container fluid>
            <Row>
              <Flex colMd={10} colLg={11} className="mx-auto">
                <Row>
                  <Flex colLg={7}>
                    <div className={styles.word__panel}>
                      <Heading
                        innerHTML={false}
                        className={styles.word__heading}
                        priority={1}
                      >
                        {pageContext.title}
                      </Heading>

                      <p
                        className={classNames(
                          styles.word__pronunciation,
                          styles.word__copy
                        )}
                      >
                        <strong>Pronunciation:</strong> [
                        {pageContext.acf.pronunciation}]
                      </p>

                      <p
                        className={classNames(
                          styles.word__syllables,
                          styles.word__copy
                        )}
                      >
                        <strong>Syllables:</strong>
                        {pageContext.acf.syllables.list.map(
                          (syllable, index) => (
                            <span
                              key={index}
                              className={classNames(styles.word__syllable)}
                            >
                              {syllable.item}
                            </span>
                          )
                        )}{' '}
                        ({pageContext.acf.syllables.count})
                      </p>

                      <hr className={styles.word__hr} />

                      <Heading priority={3} className={styles.word__subheading}>
                        Definition
                      </Heading>
                      <p
                        className={styles.word__copy}
                        dangerouslySetInnerHTML={{
                          __html: pageContext.acf.definition,
                        }}
                      />
                    </div>
                  </Flex>

                  <Flex colLg={4} className={classNames('ml-auto')}>
                    Ads or something?
                  </Flex>
                </Row>
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
  pageData: null,
};

WordTemplate.propTypes = {
  pageContext: PropTypes.instanceOf(Object),
  pageData: PropTypes.instanceOf(Object),
  onGetWord: PropTypes.func.isRequired,
  clearWordData: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

/* istanbul ignore next */
const mapStateToProps = ({ word, core: { isMenuOpen } }) => ({
  pageData: word,
  isMenuOpen,
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
