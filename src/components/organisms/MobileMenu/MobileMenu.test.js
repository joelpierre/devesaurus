import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { checkProps, findByTestAttr, matchSnapshot } from '../../../utils/test';

import MobileMenu from './MobileMenu';

const defaultProps = {};

/**
 * Factory function to create a ShallowWrapper for the MobileMenu component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<MobileMenu {...setupProps} />);
};

describe('<MobileMenu/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the MobileMenu Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-mobile-menu');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(MobileMenu, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});
