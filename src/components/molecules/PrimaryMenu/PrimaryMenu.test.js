import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../utils/test-utilities';

import PrimaryMenu from './PrimaryMenu';

const defaultProps = {};

/**
 * Factory function to create a ShallowWrapper for the PrimaryMenu component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<PrimaryMenu {...setupProps}/>);
};

describe('<PrimaryMenu/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Renders the PrimaryMenu Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-primary-menu-query');
    expect(component.length)
      .toBe(1);
  });


});
