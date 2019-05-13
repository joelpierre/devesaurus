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
// import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

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
        // arrowLeft: <SvgIcon name="arrow-left" />,
        // arrowRight: <SvgIcon name="arrow-right" />,
        arrowLeft: (
          <span>
            <span className={styles['featured-words__arrow-text']}>
              Previous
            </span>
            <FontAwesomeIcon icon={['far', 'chevron-left']} />
          </span>
        ),
        arrowRight: (
          <span>
            <span className={styles['featured-words__arrow-text']}>Next</span>
            <FontAwesomeIcon icon={['far', 'chevron-right']} />
          </span>
        ),
        draggable: true,
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
          <Row classes="mb-4">
            <Flex colMd="8">
              <Heading priority="2" classes={styles['featured-words__heading']}>
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

        <Container>
          <Row classes="mt-5">
            <Flex colMd="8">
              <Button link="/" size="lg" theme="tint-alpha">
                View all word categories{' '}
                <FontAwesomeIcon icon={['far', 'chevron-right']} />
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
