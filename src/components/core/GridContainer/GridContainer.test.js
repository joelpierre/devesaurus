import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../utils/test-utilities';
import GridContainer from './GridContainer';

const defaultProps = {
  children: `<div></div>`,
};

/**
 * Factory function to create a ShallowWrapper for the GridContainer component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GridContainer {...setupProps} />);
};

describe('<GridContainer/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Renders the GridContainer Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-grid-container');
    expect(component.length).toBe(1);
  });
});
