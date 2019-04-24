import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import {
  checkProps,
  findByTestAttr,
  matchSnapshot,
} from '../../../utils/test-utilities';

import TextBlock from './TextBlock';

const defaultProps = {
  module: {},
  pageTheme: 'alpha',
};

/**
 * Factory function to create a ShallowWrapper for the TextBlock component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<TextBlock {...setupProps} />);
};

describe('<TextBlock/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the TextBlock Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-text-block');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(TextBlock, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });

  it('should render with pageTheme instead of module theme', () => {
    wrapper = setup({
      module: {},
      pageTheme: 'brand',
    });

    const component = findByTestAttr(wrapper, 'component-text-block');

    matchSnapshot(wrapper);
    expect(component.prop('classes')).toContain('theme--brand');
  });
});
