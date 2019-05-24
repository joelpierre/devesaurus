import React from 'react';
import styles from './HeroSearch.module.scss';
import Container from '../../core/Container/Container';
import Section from '../../core/Section/Section';
import Row from '../../core/Row/Row';
import Flex from '../../core/Flex/Flex';
import InputField from '../../atoms/InputField/InputField';
import Brand from '../../atoms/Brand/Brand';
import ScrollingMouse from '../../atoms/ScrollingMouse/ScrollingMouse';

const HeroSearch = () => {
  return (
    <Section className={styles['hero-search']}>
      <Container data-test="component-hero-search">
        <Row>
          <Flex colMd={10} colLg={8} colXl={8} className="mx-auto">
            <div className={styles['hero-search__wrapper']}>
              <Brand center className={styles['hero-search__brand']} />
              <InputField
                name="hero-search"
                type="text"
                placeholder="Enter a search term. e.g. HTML"
                className={styles['hero-search__input']}
              />
            </div>
          </Flex>
        </Row>
      </Container>

      <ScrollingMouse className={styles['hero-search__scrolling-mouse']} />
    </Section>
  );
};

export default HeroSearch;
