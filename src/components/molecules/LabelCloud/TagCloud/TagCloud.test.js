import React from 'react';
import { shallow } from 'enzyme/build';

import TagCloud, { PureTagCloudList } from './TagCloud';
import {
  checkProps,
  findByTestAttr,
  matchSnapshot,
} from '../../../../utils/test';

const defaultProps = {};
const defaultPureProps = {
  allWordpressTag: {
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
 * Factory function to create a ShallowWrapper for the TagCloud component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultPureProps, ...props };
  return shallow(<TagCloud {...setupProps} />);
};
/**
 * Factory function to create a ShallowWrapper for the PureTagCloud component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const pureSetup = (props = {}) => {
  const setupProps = { ...defaultPureProps, ...props };
  return shallow(<PureTagCloudList {...setupProps} />);
};

describe('<PureTagCloudList/>', () => {
  let wrapper;
  let pureWrapper;

  beforeEach(() => {
    wrapper = setup();
    pureWrapper = pureSetup();
  });

  it('renders the TagCloudList Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-tag-cloud');
    expect(component.length).toBe(1);
  });

  it('renders the TagCloudList Query without errors', () => {
    const component = findByTestAttr(wrapper, 'component-tag-cloud-query');
    expect(component.length).toBe(1);
  });

  it('renders the PureTagCloudList Component without errors', () => {
    const component = findByTestAttr(pureWrapper, 'tag-cloud-item');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(PureTagCloudList, defaultProps);
  });

  it('should match snapshot PureTagCloudList', () => {
    matchSnapshot(pureWrapper);
  });

  it('should match snapshot TagCloudList', () => {
    matchSnapshot(wrapper);
  });
});
