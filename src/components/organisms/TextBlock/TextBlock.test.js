import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../utils/test-utilities';

import TextBlock from './TextBlock';

const defaultProps = {
  module: {},
  pageTheme: 'brand',
};

/**
 * Factory function to create a ShallowWrapper for the TextBlock component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<TextBlock {...setupProps}/>);
};

describe('<TextBlock/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Renders the TextBlock Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-text-block');
    expect(component.length)
      .toBe(1);
  });


});
