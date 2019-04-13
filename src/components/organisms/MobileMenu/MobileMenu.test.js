import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../utils/test-utilities';

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

  it('Renders the MobileMenu Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-mobile-menu');
    expect(component.length).toBe(1);
  });
});
