import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import {
  checkProps,
  findByTestAttr,
  matchSnapshot,
} from '../../../utils/test-utilities';

import Button from './Button';

const defaultProps = {
  text: 'test',
  link: '#',
};

/**
 * Factory function to create a ShallowWrapper for the Button component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Button {...setupProps} />);
};

describe('<Button/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the Button Component with router behaviour', () => {
    const component = findByTestAttr(wrapper, 'component-button');
    expect(component.length).toBe(1);
  });

  it('renders the Button Component with anchor behaviour', () => {
    wrapper = setup({
      ...defaultProps,
      behavior: 'anchor',
    });
    const component = findByTestAttr(wrapper, 'component-button');
    expect(component.length).toBe(1);
  });

  it('renders the Button Component with action behaviour', () => {
    wrapper = setup({
      ...defaultProps,
      behavior: 'action',
      action: jest.fn(),
    });
    const component = findByTestAttr(wrapper, 'component-button');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(Button, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});
