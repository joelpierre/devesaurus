import React from 'react';
import { shallow } from 'enzyme';

import InputField from './InputField';
import { findByTestAttr } from '../../../utils/test-utilities';

const defaultProps = {
  name: 'test-name',
  type: 'text',
};

/**
 * Factory function to create a ShallowWrapper for the InputField component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<InputField {...setupProps} />);
};

describe('<InputField/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Renders the InputField Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-input-field');
    expect(component.length).toBe(1);
  });
});
