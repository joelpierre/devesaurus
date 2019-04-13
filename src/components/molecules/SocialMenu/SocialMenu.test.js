import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../utils/test-utilities';

import SocialMenu from './SocialMenu';

const defaultProps = {};

/**
 * Factory function to create a ShallowWrapper for the SocialMenu component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<SocialMenu {...setupProps} />);
};

describe('<SocialMenu/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Renders the SocialMenu Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-social-menu');
    expect(component.length).toBe(1);
  });
});
