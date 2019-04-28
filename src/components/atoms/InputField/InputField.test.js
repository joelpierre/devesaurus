import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { checkProps, findByTestAttr, matchSnapshot } from '../../../utils/test';

import InputField from './InputField';
import FormLabel from '../FormLabel/FormLabel';

const defaultProps = {
  name: 'test',
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

  it('renders the InputField Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-input-field');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(InputField, defaultProps);
  });

  it('should render with correct input', () => {
    wrapper = setup({
      type: 'number',
      name: 'number',
    });
    expect(wrapper).toBeTruthy();
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });

  it('should render with FormLabel', () => {
    wrapper = setup({
      ...defaultProps,
      label: 'hello',
    });

    expect(wrapper.find(FormLabel)).toBeTruthy();
    matchSnapshot(wrapper);
  });
});
