import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { checkProps, findByTestAttr, matchSnapshot } from '../../../utils/test';
import { mockWords } from '../../../../__mocks__/mock-words';
import FeaturedWords from './FeaturedWords';

const defaultProps = {
  words: mockWords,
};
/**
 * Factory function to create a ShallowWrapper for the FeaturedWords component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<FeaturedWords {...setupProps} />);
};

describe('<FeaturedWords/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
    // console.log(wrapper.debug());
  });

  it('renders the FeaturedWords Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-featured-words');
    expect(component.length).toBe(1);
  });

  it('renders the FeaturedWords Word element without errors', () => {
    const component = findByTestAttr(wrapper, 'featured-words-word');
    expect(component.length).toBeGreaterThanOrEqual(3);
  });

  it('should render with correct props', () => {
    checkProps(FeaturedWords, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});
