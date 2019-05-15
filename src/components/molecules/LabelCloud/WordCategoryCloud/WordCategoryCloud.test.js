import React from 'react';
import { shallow } from 'enzyme/build';

import WordCategoryCloud, {
  PureWordCategoryCloudList,
} from './WordCategoryCloud';
import {
  checkProps,
  findByTestAttr,
  matchSnapshot,
} from '../../../../utils/test';

const defaultProps = {};
const defaultPureProps = {
  allWordpressWpWordCategory: {
    edges: [
      {
        node: {
          id: 1,
          slug: 'test-slug',
          name: 'test-name',
          taxonomy: 'test-tax',
        },
      },
    ],
  },
};

/**
 * Factory function to create a ShallowWrapper for the WordCategoryCloud component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultPureProps, ...props };
  return shallow(<WordCategoryCloud {...setupProps} />);
};
/**
 * Factory function to create a ShallowWrapper for the PureWordCategoryCloud component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const pureSetup = (props = {}) => {
  const setupProps = { ...defaultPureProps, ...props };
  return shallow(<PureWordCategoryCloudList {...setupProps} />);
};

describe('<PureWordCategoryCloudList/>', () => {
  let wrapper;
  let pureWrapper;

  beforeEach(() => {
    wrapper = setup();
    pureWrapper = pureSetup();
  });

  it('renders the WordCategoryCloudList Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-word-category-cloud');
    expect(component.length).toBe(1);
  });

  it('renders the WordCategoryCloudList Query without errors', () => {
    const component = findByTestAttr(
      wrapper,
      'component-word-category-cloud-query'
    );
    expect(component.length).toBe(1);
  });

  it('renders the PureWordCategoryCloudList Component without errors', () => {
    const component = findByTestAttr(pureWrapper, 'word-category-cloud-item');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(PureWordCategoryCloudList, defaultProps);
  });

  it('should match snapshot PureWordCategoryCloudList', () => {
    matchSnapshot(pureWrapper);
  });

  it('should match snapshot WordCategoryCloudList', () => {
    matchSnapshot(wrapper);
  });
});
