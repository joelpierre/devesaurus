import React from 'react';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
import InputField from '../../atoms/InputField/InputField';
import Button from '../../molecules/Buttons/Button';

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
              placeholder: '',
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
    console.log('We will do something here');
  };

  return (
    <Section className={styles['hero-search']}>
      <Container data-test="component-hero-search">
        <Row>
          <Flex colMd={10} colLg={8} colXl={8} className="mx-auto">
            <div className={styles['hero-search__wrapper']}>
              <Brand center className={styles['hero-search__brand']} />

              <form
                className={styles['hero-search__form']}
                onSubmit={handleSearchSubmit}
              >
                <InputField
                  className={styles['hero-search__form-input']}
                  placeholder="Enter a search term. e.g. HTML"
                  type="text"
                  name="hero-search"
                />
                <Button
                  className={styles['hero-search__form-submit']}
                  theme="brand"
                  type="submit"
                  behavior="action"
                >
                  <FontAwesomeIcon
                    icon={['fas', 'search']}
                    className={styles['hero-search__form-icon']}
                  />
                </Button>
              </form>

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
                className={classNames(
                  styles['hero-search__label-cloud'],
                  'mx-auto'
                )}
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
