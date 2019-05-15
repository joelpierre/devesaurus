import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { checkProps, findByTestAttr, matchSnapshot } from '../../../utils/test';

import FormField from './FormField';

const defaultProps = {
  children: 'form-name',
};

/**
 * Factory function to create a ShallowWrapper for the FormField component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<FormField {...setupProps} />);
};

describe('<FormField/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the FormField Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-form-field');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(FormField, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});
