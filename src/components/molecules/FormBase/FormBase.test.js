import React from 'react';
import { shallow } from 'enzyme';

import FormBase from './FormBase';
import { findByTestAttr } from '../../../utils/test-utilities';

const defaultProps = {};

/**
 * Factory function to create a ShallowWrapper for the FormBase component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<FormBase {...setupProps}/>);
};

describe('<FormBase/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Renders the FormBase Component without errors', () => {
    const component = findByTestAttr(wrapper, 'VALUE_HERE');
    expect(component.length)
      .toBe(1);
  });

});
