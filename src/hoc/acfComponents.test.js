import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import acfComponents from './acfComponents';
import {
  checkProps,
  findByTestAttr,
  matchSnapshot,
} from '../utils/test-utilities';

const defaultProps = {
  component: {
    acf_fc_layout: 'text_block',
  },
  pageTheme: 'brand',
};

/**
 * Factory function to create a ShallowWrapper for the acfComponents component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<acfComponents {...setupProps} />);
};

describe('<acfComponents/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  xit('renders the acfComponents Component without errors', () => {
    const component = findByTestAttr(
      wrapper,
      `hoc-acf-${defaultProps.component.acf_fc_layout}`
    );

    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(acfComponents, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});
