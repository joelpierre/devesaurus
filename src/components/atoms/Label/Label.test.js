import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'gatsby';

import { checkProps, findByTestAttr, matchSnapshot } from '../../../utils/test';

import Label from './Label';

const defaultProps = {
  children: 'some label text',
};

/**
 * Factory function to create a ShallowWrapper for the Label component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Label {...setupProps} />);
};

describe('<Label/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the Label Component without errors non-link', () => {
    const component = findByTestAttr(wrapper, 'component-label');
    expect(component.length).toBe(1);
  });

  it('renders the Label Component without errors link', () => {
    wrapper = setup({ link: '/hello', text: 'text' });
    const component = findByTestAttr(wrapper, 'component-label');
    expect(wrapper.find(Link)).toBeTruthy();
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(Label, defaultProps);
  });

  it('should match snapshot non-link', () => {
    matchSnapshot(wrapper);
  });

  it('should match snapshot link', () => {
    wrapper = setup({ link: '/hello', text: 'text' });
    matchSnapshot(wrapper);
  });
});
