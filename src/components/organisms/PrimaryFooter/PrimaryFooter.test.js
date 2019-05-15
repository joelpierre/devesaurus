import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { checkProps, findByTestAttr, matchSnapshot } from '../../../utils/test';

import PrimaryFooter from './PrimaryFooter';

const defaultProps = {};

/**
 * Factory function to create a ShallowWrapper for the PrimaryFooter component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<PrimaryFooter {...setupProps} />);
};

describe('<PrimaryFooter/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the PrimaryFooter Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-primary-footer');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(PrimaryFooter, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});
