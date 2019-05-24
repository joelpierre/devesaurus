import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { checkProps, findByTestAttr, matchSnapshot } from '../../../utils/test';

import CtaBanner from './CtaBanner';

const defaultProps = {
  module: {
    theme: 'alpha',
  },
};

/**
 * Factory function to create a ShallowWrapper for the CtaBanner component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<CtaBanner {...setupProps} />);
};

describe('<CtaBanner/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the CtaBanner Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-cta-banner');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(CtaBanner, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });

  it('should render with pageTheme instead of module theme', () => {
    wrapper = setup({
      module: {},
      pageTheme: 'brand',
    });
    const component = findByTestAttr(wrapper, 'component-cta-banner');
    matchSnapshot(wrapper);
    expect(component.prop('className')).toContain('theme--brand');
  });
});
