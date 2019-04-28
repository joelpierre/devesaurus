import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { checkProps, findByTestAttr, matchSnapshot } from '../../../utils/test';

import Hamburger from './Hamburger';

const defaultProps = {
  company: 'test',
};

/**
 * Factory function to create a ShallowWrapper for the Hamburger component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Hamburger {...setupProps} />);
};

describe('<Hamburger/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the Hamburger Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-hamburger');
    expect(component.length).toBe(1);
  });

  it('should render with correct props (text)', () => {
    checkProps(Hamburger, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});
