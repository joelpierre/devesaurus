import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Carousel from '@brainhubeu/react-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
import Button from '../../molecules/Buttons/Button';
// import classNames from 'classnames';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

class FeaturedWords extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      carouselSettings: {
        slidesPerPage: 3,
        infinite: true,
        addArrowClickHandler: true,
        arrowLeft: (
          <span>
            <span className={styles['featured-words__arrow-text']}>
              Previous
            </span>
            <SvgIcon name="dev-chevron-left" />
          </span>
        ),
        arrowRight: (
          <span>
            <span className={styles['featured-words__arrow-text']}>Next</span>
            <SvgIcon name="dev-chevron-right" />
          </span>
        ),
        draggable: false,
        breakpoints: {
          1200: {
            slidesPerPage: 2,
          },
          900: {
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
    const { contrast, theme, words } = this.props;
    const { carouselSettings } = this.state;

    return (
      <Section
        data-test="component-featured-words"
        className={`${styles['featured-words']}`}
        contrast={contrast}
        theme={theme}
      >
        <Container>
          <Row className="mb-5">
            <Flex colMd="8">
              <Heading
                priority="2"
                className={styles['featured-words__heading']}
              >
                Featured Words
              </Heading>
              <p className={styles['featured-words__copy']}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam dolores ex expedita explicabo hic, in iure minima
                nesciunt, nobis nulla numquam odio placeat quaerat quisquam quos
                sequi vero, vitae voluptatibus?
              </p>
            </Flex>
          </Row>
        </Container>

        <Container>
          <Row>
            <Flex col={12}>
              <Carousel {...carouselSettings}>
                {words.map(({ node: word }) => {
                  return (
                    <WordCard
                      data-test="featured-words-word"
                      key={word.id}
                      slug={word.slug}
                      title={word.title}
                      acf={word.acf}
                      tags={word.word_tags}
                      category={word.word_cats[0]}
                      className={styles['featured-words__word-card']}
                      contrast={!contrast}
                    />
                  );
                })}
              </Carousel>
            </Flex>
          </Row>
        </Container>

        <Container>
          <Row className="mt-6">
            <Flex colMd="8">
              <Button link="/" size="lg" theme="tint-alpha">
                View all word categories <SvgIcon name="dev-chevron-right" />
              </Button>
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
