import React from 'react';
import { shallow } from 'enzyme';

import { checkProps, findByTestAttr, matchSnapshot } from '../../../utils/test';

import ScrollingMouse from './ScrollingMouse';

const defaultProps = {};

/**
 * Factory function to create a ShallowWrapper for the ScrollingMouse component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<ScrollingMouse {...setupProps} />);
};

describe('<ScrollingMouse/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the ScrollingMouse Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-scrolling-mouse');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(ScrollingMouse, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});
