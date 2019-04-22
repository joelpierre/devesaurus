import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import {
  checkProps,
  findByTestAttr,
  matchSnapshot,
} from '../../../utils/test-utilities';

import PrimaryHeader from './PrimaryHeader';

const defaultProps = {};

/**
 * Factory function to create a ShallowWrapper for the PrimaryHeader component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<PrimaryHeader {...setupProps} />);
};

describe('<PrimaryHeader/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the PrimaryHeader Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-primary-header');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(PrimaryHeader, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});
