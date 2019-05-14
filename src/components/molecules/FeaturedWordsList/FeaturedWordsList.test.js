import React from 'react';
import { shallow } from 'enzyme';

import { checkProps, findByTestAttr, matchSnapshot } from '../../../utils/test';

import FeaturedWordsList from './FeaturedWordsList';

const defaultProps = {};

/**
 * Factory function to create a ShallowWrapper for the FeaturedWordsList component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<FeaturedWordsList {...setupProps} />);
};

describe('<FeaturedWordsList/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the FeaturedWordsList Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-featured-words-list');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(FeaturedWordsList, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});
