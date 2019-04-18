import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import WordCard from '../../molecules/WordCard/WordCard';
import styles from './FeaturedWords.module.scss';
import { wordPropTypeShape } from '../../../utils/propTypeShapes';
import sortWordObj from '../../../helpers/sortWordObj';
import CoreSection from '../../core/CoreSection/CoreSection';
import GridContainer from '../../core/GridContainer/GridContainer';
import GridRow from '../../core/GridRow/GridRow';
import GridColumn from '../../core/GridColumn/GridColumn';
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
      <CoreSection
        data-test="component-featured-words"
        classes={`${styles['featured-words']}`}
        contrast={contrast}
      >
        <GridContainer>
          <GridRow>
            <GridColumn>
              <Heading priority="2" classes={styles['featured-words__heading']}>
                Featured Words
              </Heading>
            </GridColumn>
          </GridRow>

          <GridRow>
            {words.map((word, index) => {
              return (
                <GridColumn
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
                </GridColumn>
              );
            })}
          </GridRow>
        </GridContainer>
      </CoreSection>
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
