import React from 'react';
import { shallow } from 'enzyme';

import MenuItem from './MenuItem';
import { findByTestAttr } from '../../../utils/test-utilities';

const defaultProps = {
  item: {
    title: 'Test Title',
    object_slug: 'test-title',
  },
  classes: 'test-class',
};

/**
 * Factory function to create a ShallowWrapper fro the App component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<MenuItem {...setupProps}/>);
};

describe('<MenuItem/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Should render MenuItem Component', () => {
    const component = findByTestAttr(wrapper, 'component-menu-item');
    expect(component.length)
      .toBe(1);
  });
});
