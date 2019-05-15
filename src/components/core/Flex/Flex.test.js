import React from 'react';
import { shallow } from 'enzyme';

import { checkProps, findByTestAttr } from '../../../utils/test';

import Flex from './Flex';

const defaultProps = {
  children: `<div/>`,
};

/**
 * Factory function to create a ShallowWrapper for the Flex component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Flex {...setupProps} />);
};

describe('<Flex/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Renders the Flex Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-flex');
    expect(component.length).toBe(1);
  });

  it('does not throw warning with expected props', () => {
    checkProps(Flex, defaultProps);
  });
});
