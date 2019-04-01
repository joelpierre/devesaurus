import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../utils/test-utilities';

import PrimaryFooter from './PrimaryFooter';

const defaultProps = {};

/**
 * Factory function to create a ShallowWrapper for the PrimaryFooter component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<PrimaryFooter {...setupProps}/>);
};

describe('<PrimaryFooter/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Renders the PrimaryFooter Component without errors', () => {
    const component = findByTestAttr(wrapper, 'VALUE_HERE');
    expect(component.length)
      .toBe(1);
  });


});
