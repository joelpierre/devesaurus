import React from 'react';
import { shallow } from 'enzyme/build';

import WordTagCloud, { PureWordTagCloudList } from './WordTagCloud';
import {
  checkProps,
  findByTestAttr,
  matchSnapshot,
} from '../../../../utils/test';

const defaultProps = {};
const defaultPureProps = {
  allWordpressWpWordTag: {
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
 * Factory function to create a ShallowWrapper for the WordTagCloud component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultPureProps, ...props };
  return shallow(<WordTagCloud {...setupProps} />);
};
/**
 * Factory function to create a ShallowWrapper for the PureWordTagCloud component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const pureSetup = (props = {}) => {
  const setupProps = { ...defaultPureProps, ...props };
  return shallow(<PureWordTagCloudList {...setupProps} />);
};

describe('<PureWordTagCloudList/>', () => {
  let wrapper;
  let pureWrapper;

  beforeEach(() => {
    wrapper = setup();
    pureWrapper = pureSetup();
  });

  it('renders the WordTagCloudList Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-word-tag-cloud');
    expect(component.length).toBe(1);
  });

  it('renders the WordTagCloudList Query without errors', () => {
    const component = findByTestAttr(wrapper, 'component-word-tag-cloud-query');
    expect(component.length).toBe(1);
  });

  it('renders the PureWordTagCloudList Component without errors', () => {
    const component = findByTestAttr(pureWrapper, 'word-tag-cloud-item');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(PureWordTagCloudList, defaultProps);
  });

  it('should match snapshot PureWordTagCloudList', () => {
    matchSnapshot(pureWrapper);
  });

  it('should match snapshot WordTagCloudList', () => {
    matchSnapshot(wrapper);
  });
});
