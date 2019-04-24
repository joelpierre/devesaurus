import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import WordCard from '../../molecules/WordCard/WordCard';
import styles from './FeaturedWords.module.scss';
import { wordPropTypeShape } from '../../../utils/propTypes';
import { sortWordObj } from '../../../helpers';
import Section from '../../core/Section/Section';
import Container from '../../core/Container/Container';
import Row from '../../core/Row/Row';
import Flex from '../../core/Flex/Flex';
import Heading from '../../core/Heading/Heading';

class FeaturedWords extends PureComponent {
  constructor(props) {
    super(props);
    this.sortWords = this.sortWords.bind(this);
  }

  componentDidMount() {
    this.sortWords();
  }

  sortWords() {
    const { words } = this.props;
    if (words) {
      words.map(word => {
        return sortWordObj(word);
      });
    }
  }

  render() {
    const { words, contrast } = this.props;

    return (
      <Section
        data-test="component-featured-words"
        classes={`${styles['featured-words']}`}
        contrast={contrast}
      >
        <Container>
          <Row>
            <Flex>
              <Heading priority="2" classes={styles['featured-words__heading']}>
                Featured Words
              </Heading>
            </Flex>
          </Row>

          <Row>
            {words.map((word, index) => {
              return (
                <Flex
                  data-test="featured-words-word"
                  key={index}
                  colXs="2"
                  colLg="4"
                >
                  <WordCard
                    slug={word.slug}
                    title={word.title}
                    acf={word.acf}
                    terms={word.terms}
                    classes={styles['featured-words__word-card']}
                    contrast={!contrast}
                  />
                </Flex>
              );
            })}
          </Row>
        </Container>
      </Section>
    );
  }
}

FeaturedWords.defaultProps = {
  contrast: true,
};

FeaturedWords.propTypes = {
  contrast: PropTypes.bool,
  words: PropTypes.arrayOf(PropTypes.shape({ ...wordPropTypeShape }))
    .isRequired,
};

export default FeaturedWords;
