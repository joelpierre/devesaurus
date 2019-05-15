import React from 'react';
import { shallow } from 'enzyme/build';

import CategoryCloud, { PureCategoryCloudList } from './CategoryCloud';
import {
  checkProps,
  findByTestAttr,
  matchSnapshot,
} from '../../../../utils/test';

const defaultProps = {};
const defaultPureProps = {
  allWordpressCategory: {
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
 * Factory function to create a ShallowWrapper for the CategoryCloud component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultPureProps, ...props };
  return shallow(<CategoryCloud {...setupProps} />);
};
/**
 * Factory function to create a ShallowWrapper for the PureCategoryCloud component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const pureSetup = (props = {}) => {
  const setupProps = { ...defaultPureProps, ...props };
  return shallow(<PureCategoryCloudList {...setupProps} />);
};

describe('<PureCategoryCloudList/>', () => {
  let wrapper;
  let pureWrapper;

  beforeEach(() => {
    wrapper = setup();
    pureWrapper = pureSetup();
  });

  it('renders the CategoryCloudList Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-category-cloud');
    expect(component.length).toBe(1);
  });

  it('renders the CategoryCloudList Query without errors', () => {
    const component = findByTestAttr(wrapper, 'component-category-cloud-query');
    expect(component.length).toBe(1);
  });

  it('renders the PureCategoryCloudList Component without errors', () => {
    const component = findByTestAttr(pureWrapper, 'category-cloud-item');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(PureCategoryCloudList, defaultProps);
  });

  it('should match snapshot PureCategoryCloudList', () => {
    matchSnapshot(pureWrapper);
  });

  it('should match snapshot CategoryCloudList', () => {
    matchSnapshot(wrapper);
  });
});
