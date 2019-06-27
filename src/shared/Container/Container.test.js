import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../utils/test';
import Container from './Container';

const defaultProps = {
  children: `<div></div>`,
};

/**
 * Factory function to create a ShallowWrapper for the Container component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Container {...setupProps} />);
};

describe('<Container/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Renders the Container Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-grid-container');
    expect(component.length).toBe(1);
  });
});
