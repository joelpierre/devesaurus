import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { checkProps, findByTestAttr, matchSnapshot } from '../../../utils/test';

import MenuItem from './MenuItem';

const defaultProps = {
  item: {
    title: 'Test Title',
    object_slug: 'test-title',
  },
  classes: 'test-class',
};

/**
 * Factory function to create a ShallowWrapper for the MenuItem component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<MenuItem {...setupProps} />);
};

describe('<MenuItem/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the MenuItem Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-menu-item');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(MenuItem, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});
