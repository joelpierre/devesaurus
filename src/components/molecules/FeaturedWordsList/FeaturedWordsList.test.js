import React from 'react';
import { shallow } from 'enzyme';

import { checkProps, findByTestAttr, matchSnapshot } from '../../../utils/test';

import FeaturedWordsList, { PureFeaturedWordsList } from './FeaturedWordsList';

const defaultProps = {};

const defaultPureProps = {
  allWordpressWpWord: {
    edges: [
      {
        node: {
          id: 1,
          title: 'title',
          slug: 'slug',
          acf: {
            pronunciation: 'boom',
            origin: {
              value: 'UK',
              label: 'GB',
            },
          },
          word_tags: {
            id: 1,
            slug: 'tag-slug',
            name: 'tag-name',
            taxonomy: 'word_tag',
          },
          word_cats: {
            id: 1,
            slug: 'category-slug',
            name: 'category-name',
            taxonomy: 'word_category',
          },
        },
      },
    ],
  },
};

/**
 * Factory function to create a ShallowWrapper for the FeaturedWordsList component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<FeaturedWordsList {...setupProps} />);
};

const pureSetup = (props = {}) => {
  const setupProps = { ...defaultPureProps, ...props };
  return shallow(<PureFeaturedWordsList {...setupProps} />);
};

describe('<PureFeaturedWordsList/>', () => {
  let wrapper;
  let pureWrapper;

  beforeEach(() => {
    wrapper = setup();
    pureWrapper = pureSetup();
  });

  it('renders the FeaturedWordsList Component without errors query', () => {
    const component = findByTestAttr(
      wrapper,
      'component-featured-words-list-query'
    );
    expect(component.length).toBe(1);
  });

  it('renders the FeaturedWordsList Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-featured-words-list');
    expect(component.length).toBe(1);
  });

  it('renders the FeaturedWordsList list without errors', () => {
    const component = findByTestAttr(wrapper, 'featured-words-list');
    expect(component.length).toBe(1);
  });

  it('renders the PureFeaturedWordsList Component without errors', () => {
    const component = findByTestAttr(
      pureWrapper,
      'component-pure-featured-words-list'
    );

    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(FeaturedWordsList, defaultProps);
  });

  it('should render with correct pureProps', () => {
    checkProps(PureFeaturedWordsList, defaultPureProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });

  it('should match pure snapshot', () => {
    matchSnapshot(pureWrapper);
  });
});
