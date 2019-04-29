import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Carousel from '@brainhubeu/react-carousel';

import WordCard from '../../molecules/WordCard/WordCard';
import styles from './FeaturedWords.module.scss';
import './ReactCarousel.scss';

import {
  defaultTheme,
  themePropType,
  wordPropTypeShape,
} from '../../../utils/propTypes';
import Section from '../../core/Section/Section';
import Container from '../../core/Container/Container';
import Row from '../../core/Row/Row';
import Flex from '../../core/Flex/Flex';
import Heading from '../../core/Heading/Heading';
import { sortWordObj } from '../../../utils';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

class FeaturedWords extends PureComponent {
  constructor(props) {
    super(props);

    const { words } = this.props;

    this.state = {
      featuredWords: words,
      carouselSettings: {
        slidesPerPage: 3,
        infinite: true,
        addArrowClickHandler: true,
        arrowRight: <SvgIcon name="arrow-right" />,
        draggable: false,
        breakpoints: {
          900: {
            slidesPerPage: 2,
          },
          600: {
            draggable: true,
            slidesPerPage: 1,
          },
        },
      },
    };

    this.sortWords = this.sortWords.bind(this);
  }

  componentDidMount() {
    this.sortWords();
  }

  sortWords() {
    const { words } = this.props;

    words.map(word => {
      return sortWordObj(word);
    });
  }

  render() {
    const { contrast, theme } = this.props;
    const { featuredWords, carouselSettings } = this.state;

    return (
      <Section
        data-test="component-featured-words"
        classes={`${styles['featured-words']}`}
        contrast={contrast}
        theme={theme}
      >
        <Container>
          <Row>
            <Flex col="12">
              <Heading priority="2" classes={styles['featured-words__heading']}>
                Featured Words
              </Heading>
            </Flex>
          </Row>

          <Row>
            <Flex col={12}>
              <Carousel {...carouselSettings}>
                {featuredWords.map(word => {
                  return (
                    <WordCard
                      data-test="featured-words-word"
                      key={word.id}
                      slug={word.slug}
                      title={word.title}
                      acf={word.acf}
                      terms={word.terms}
                      classes={styles['featured-words__word-card']}
                      contrast={!contrast}
                    />
                  );
                })}
              </Carousel>
            </Flex>
          </Row>
        </Container>
      </Section>
    );
  }
}

FeaturedWords.defaultProps = {
  contrast: true,
  ...defaultTheme(),
};

FeaturedWords.propTypes = {
  ...themePropType,
  contrast: PropTypes.bool,
  words: PropTypes.arrayOf(PropTypes.shape({ ...wordPropTypeShape }))
    .isRequired,
};

export default FeaturedWords;
