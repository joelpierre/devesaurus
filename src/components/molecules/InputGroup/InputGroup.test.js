import React from 'react';
import { shallow } from 'enzyme';

import InputGroup from './InputGroup';
import { findByTestAttr } from '../../../utils/test-utilities';

const defaultProps = {
  name: 'test-name',
  type: 'text',
};

/**
 * Factory function to create a ShallowWrapper for the InputGroup component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<InputGroup {...setupProps} />);
};

describe('<InputGroup/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Renders the InputGroup Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-input-group');
    expect(component.length).toBe(1);
  });
});
