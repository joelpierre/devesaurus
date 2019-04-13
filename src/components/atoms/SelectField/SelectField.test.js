import React from 'react';
import { shallow } from 'enzyme';

import SelectField from './SelectField';
import { findByTestAttr } from '../../../utils/test-utilities';

const defaultProps = {
  name: 'test-name',
  options: [
    {
      name: 'Test Option Name',
      value: 'test-option-value',
    },
  ],
};

/**
 * Factory function to create a ShallowWrapper for the SelectField component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<SelectField {...setupProps} />);
};

describe('<SelectField/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Renders the SelectField Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-select-field');
    expect(component.length).toBe(1);
  });
});
