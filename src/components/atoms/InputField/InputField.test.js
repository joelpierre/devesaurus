import React from 'react';
import { shallow } from 'enzyme';

import Input from './Input';
import { findByTestAttr } from '../../../utils/test-utilities';

const defaultProps = {};

/**
 * Factory function to create a ShallowWrapper for the Input component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Input {...setupProps}/>);
};

describe('<Input/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Renders the Input Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-input');
    expect(component.length)
      .toBe(1);
  });


});
