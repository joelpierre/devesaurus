import React from 'react';
import { shallow } from 'enzyme';

import { checkProps, findByTestAttr } from '../../../utils/test-utilities';

import GridColumn from './GridColumn';

const defaultProps = {
  children: `<div/>`,
};

/**
 * Factory function to create a ShallowWrapper for the GridColumn component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GridColumn {...setupProps} />);
};

describe('<GridColumn/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Renders the GridColumn Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-grid-column');
    expect(component.length).toBe(1);
  });

  it('does not throw warning with expected props', () => {
    checkProps(GridColumn, defaultProps);
  });
});
