import React from 'react';
import { shallow } from 'enzyme';

import { BasicLayout } from './BasicLayout';
import { checkProps, findByTestAttr, matchSnapshot } from '../utils/test';

const defaultProps = {
  children: 'Hello',
  isMenuOpen: false,
};

/**
 * Factory function to create a ShallowWrapper for the BasicLayout component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<BasicLayout {...setupProps} />);
};

describe('<BasicLayout/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the BasicLayout Component without errors', () => {
    const component = findByTestAttr(wrapper, 'basic-layout-main');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(BasicLayout, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});
