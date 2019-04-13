import React from 'react';
import { shallow } from 'enzyme/build';

import Hamburger from './Hamburger';
import { findByTestAttr } from '../../../utils/test-utilities';

const defaultProps = {
  company: 'test-company',
};

/**
 * Factory function to create a ShallowWrapper for the Hamburger component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Hamburger {...setupProps} />);
};

describe('<Hamburger/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Renders the Hamburger Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-hamburger');
    expect(component.length).toBe(1);
  });
});
