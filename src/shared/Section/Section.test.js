import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { checkProps, findByTestAttr, matchSnapshot } from '../../utils/test';

import Section from './Section';

const defaultProps = {
  children: `<div></div>`,
};

/**
 * Factory function to create a ShallowWrapper for the Section component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Section {...setupProps} />);
};

describe('<Section/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the Section Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-section');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(Section, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});
