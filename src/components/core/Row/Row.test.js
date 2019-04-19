import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../utils/test-utilities';

import Row from './Row';

const defaultProps = {
  children: `<div></div>`,
};

/**
 * Factory function to create a ShallowWrapper for the Row component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Row {...setupProps} />);
};

describe('<Row/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Renders the Row Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-grid-row');
    expect(component.length).toBe(1);
  });
});
