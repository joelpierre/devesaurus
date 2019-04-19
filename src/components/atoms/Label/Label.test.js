import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import {
  checkProps,
  findByTestAttr,
  matchSnapshot,
} from '../../../utils/test-utilities';

import Label from './Label';

const defaultProps = {
  text: 'test',
  name: 'test',
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

  it('renders the Label Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-label');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(Label, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});
