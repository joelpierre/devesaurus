import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../utils/test-utilities';
import { mockWords } from '../../../../__mocks__/mock-words';
import FeaturedWords from './FeaturedWords';

const defaultProps = {
    words: mockWords,
  }
;

/**
 * Factory function to create a ShallowWrapper for the FeaturedWords component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<FeaturedWords {...setupProps}/>);
};

describe('<FeaturedWords/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Renders the FeaturedWords Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-featured-words');
    expect(component.length)
      .toBe(1);
  });

  it('Renders the FeaturedWords Component without errors', () => {
    const component = findByTestAttr(wrapper, 'featured-words-word');
    expect(component.length)
      .toBe(mockWords.length);
  });


});
