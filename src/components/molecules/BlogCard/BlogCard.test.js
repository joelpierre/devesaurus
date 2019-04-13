import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../utils/test-utilities';

import BlogCard from './BlogCard';

const defaultProps = {};

/**
 * Factory function to create a ShallowWrapper for the BlogCard component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<BlogCard {...setupProps} />);
};

describe('<BlogCard/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Renders the BlogCard Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-blog-card');
    expect(component.length).toBe(1);
  });
});
