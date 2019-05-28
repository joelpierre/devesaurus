import React from 'react';
import classNames from 'classnames';

import styles from './HeroSearch.module.scss';
import Container from '../../core/Container/Container';
import Section from '../../core/Section/Section';
import Row from '../../core/Row/Row';
import Flex from '../../core/Flex/Flex';
import Brand from '../../atoms/Brand/Brand';
import ScrollingMouse from '../../atoms/ScrollingMouse/ScrollingMouse';
import LabelCloud from '../../molecules/LabelCloud/LabelCloud';
import FormBase from '../../molecules/FormBase/FormBase';
import Heading from '../../core/Heading/Heading';

const HeroSearchFormData = {
  formName: 'Hero Search Form',
  buttons: [],
  formGroups: [
    {
      fieldSet: {
        fields: [
          {
            type: 'input',
            columns: {
              colMd: 12,
            },
            input: {
              name: 'hero-search',
              type: 'text',
              placeholder: 'Enter a search term. e.g. HTML',
              styles: styles['hero-search__input'],
            },
          },
        ],
      },
    },
  ],
};

const HeroSearch = () => {
  const handleSearchSubmit = e => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <Section className={styles['hero-search']}>
      <Container data-test="component-hero-search">
        <Row>
          <Flex colMd={10} colLg={8} colXl={8} className="mx-auto">
            <div className={styles['hero-search__wrapper']}>
              <Brand center className={styles['hero-search__brand']} />

              <FormBase
                className={styles['hero-search__form']}
                onSubmit={e => handleSearchSubmit(e)}
                buttons={HeroSearchFormData.buttons}
                formGroups={HeroSearchFormData.formGroups}
                formName={HeroSearchFormData.formName}
              />

              <Heading
                priority={4}
                className={classNames(
                  `text-center mb-3`,
                  styles['hero-search__subheading']
                )}
              >
                Top Words
              </Heading>
              <LabelCloud
                taxonomy="word_tag"
                className={styles['hero-search__label-cloud']}
              />
            </div>
          </Flex>
        </Row>
      </Container>

      <ScrollingMouse
        theme="tint-omega"
        className={styles['hero-search__scrolling-mouse']}
      />
    </Section>
  );
};

export default HeroSearch;
