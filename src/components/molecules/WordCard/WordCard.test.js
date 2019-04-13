import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../utils/test-utilities';

import WordCard from './WordCard';

const defaultProps = {
  title: 'title',
  slug: 'slug',
  terms: [],
  acf: {
    syllables: {
      count: '1',
      list: [{ item: 'test' }],
    },
  },
};

/**
 * Factory function to create a ShallowWrapper for the WordCard component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<WordCard {...setupProps} />);
};

describe('<WordCard/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Renders the WordCard Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-word-card');
    expect(component.length).toBe(1);
  });
});
