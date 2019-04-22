import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Error404 from './404';
import {
  checkProps,
  findByTestAttr,
  matchSnapshot,
} from '../utils/test-utilities';

const defaultProps = {};

/**
 * Factory function to create a ShallowWrapper for the Error404 component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Error404 {...setupProps} />);
};

describe('<Error404/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the Error404 Component without errors', () => {
    const component = findByTestAttr(wrapper, 'page-error-404');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(Error404, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});
