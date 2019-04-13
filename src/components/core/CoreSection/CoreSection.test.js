import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../utils/test-utilities';

import CoreSection from './CoreSection';

const defaultProps = {
  children: `<div></div>`,
};

/**
 * Factory function to create a ShallowWrapper for the CoreSection component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<CoreSection {...setupProps} />);
};

describe('<CoreSection/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Renders the CoreSection Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-core-section');
    expect(component.length).toBe(1);
  });
});
