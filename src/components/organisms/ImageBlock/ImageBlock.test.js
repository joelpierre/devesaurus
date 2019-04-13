import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../utils/test-utilities';

import ImageBlock from './ImageBlock';

const defaultProps = {
  module: {},
  pageTheme: 'brand',
};

/**
 * Factory function to create a ShallowWrapper for the ImageBlock component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<ImageBlock {...setupProps} />);
};

describe('<ImageBlock/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Renders the ImageBlock Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-image-block');
    expect(component.length).toBe(1);
  });
});
