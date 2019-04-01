import React from 'react';
import { shallow } from 'enzyme';

import FormField from './FormField';
import { findByTestAttr } from '../../../utils/test-utilities';

const defaultProps = {
  name: 'form-name',
  type: 'text',

};

/**
 * Factory function to create a ShallowWrapper for the FormField component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<FormField {...setupProps}/>);
};

describe('<FormField/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Renders the FormField Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-form-field');
    expect(component.length)
      .toBe(1);
  });


});
