import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import AcfComponents from './AcfComponents';
import {
  checkProps,
  findByTestAttr,
  matchSnapshot,
} from '../utils/test-utilities';
import { mockComponent } from '../../__mocks__/mock-components';

const defaultProps = {
  ...mockComponent,
  pageTheme: 'brand',
};

/**
 * Factory function to create a ShallowWrapper for the AcfComponents component.
 * @param {object} props - Component props specific to setup
 * @returns {MountWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return mount(<AcfComponents {...setupProps} />);
};

describe('<AcfComponents/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('should mount', () => {
    expect(wrapper).toBeTruthy();
  });

  it('renders the AcfComponents Component without errors', () => {
    const component = findByTestAttr(
      wrapper,
      `hoc-acf-${defaultProps.component.acf_fc_layout}`
    );

    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(AcfComponents, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});
