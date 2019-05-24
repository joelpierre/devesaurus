import React from 'react';
import { shallow } from 'enzyme';

import { checkProps, findByTestAttr, matchSnapshot } from '../utils/test';
import ConnectedCoreLayout, { CoreLayout } from './CoreLayout';

const defaultProps = {
  children: 'Hello',
  isMenuOpen: false,
};

/**
 * Factory function to create a ShallowWrapper for the CoreLayout component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<CoreLayout {...setupProps} />);
};

describe('<CoreLayout/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the CoreLayout Component without errors', () => {
    const component = findByTestAttr(wrapper, 'core-layout-main');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(CoreLayout, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});
