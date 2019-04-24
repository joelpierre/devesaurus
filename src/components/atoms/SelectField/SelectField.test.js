import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import {
  checkProps,
  findByTestAttr,
  matchSnapshot,
} from '../../../utils/test-utilities';

import SelectField from './SelectField';
import FormLabel from '../FormLabel/FormLabel';

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

  it('renders the SelectField Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-select-field');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(SelectField, defaultProps);
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
