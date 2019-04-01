import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../utils/test-utilities';

import PrimaryHeader from './PrimaryHeader';

const defaultProps = {};

/**
 * Factory function to create a ShallowWrapper for the PrimaryHeader component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<PrimaryHeader {...setupProps}/>);
};

describe('<PrimaryHeader/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Renders the PrimaryHeader Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-primary-header');
    expect(component.length)
      .toBe(1);
  });


});
