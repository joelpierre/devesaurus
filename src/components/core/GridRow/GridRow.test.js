import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../utils/test-utilities';

import GridRow from './GridRow';

const defaultProps = {
  children: `<div></div>`,
};

/**
 * Factory function to create a ShallowWrapper for the GridRow component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GridRow {...setupProps} />);
};

describe('<GridRow/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Renders the GridRow Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-grid-row');
    expect(component.length).toBe(1);
  });
});
