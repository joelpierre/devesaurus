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
    const { words } = this.props;

    return (
      <CoreSection
        data-test="component-featured-words"
        classes={`${styles['featured-words']}`}
      >
        <GridContainer>
          <GridRow>
            {words.map((word, index) => {
              return (
                <GridColumn
                  data-test="featured-words-word"
                  key={index}
                  classes={`flex-16 flex-md-5 flex-lg-4 ${
                    styles['featured-words__word-card']
                  }`}
                >
                  <WordCard
                    slug={word.slug}
                    title={word.title}
                    acf={word.acf}
                    terms={word.terms}
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

FeaturedWords.propTypes = {
  words: PropTypes.arrayOf(PropTypes.shape({ ...wordPropTypeShape }))
    .isRequired,
};

export default FeaturedWords;
