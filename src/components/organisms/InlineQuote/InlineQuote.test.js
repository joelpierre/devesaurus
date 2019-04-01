import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../utils/test-utilities';

import InlineQuote from './InlineQuote';

const defaultProps = {
  module: {},
  pageTheme: 'brand',
};

/**
 * Factory function to create a ShallowWrapper for the InlineQuote component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<InlineQuote {...setupProps}/>);
};

describe('<InlineQuote/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Renders the InlineQuote Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-inline-quote');
    expect(component.length)
      .toBe(1);
  });


});
