import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import {
  checkProps,
  findByTestAttr,
  matchSnapshot,
} from '../../../utils/test-utilities';

import SvgIcon from './SvgIcon';

const defaultProps = {
  name: 'logo',
};

/**
 * Factory function to create a ShallowWrapper for the SvgIcon component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<SvgIcon {...setupProps} />);
};

describe('<SvgIcon/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the SvgIcon Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-svg-icon');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(SvgIcon, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});
