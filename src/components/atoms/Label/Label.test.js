import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../utils/test-utilities';

import Label from './Label';

const defaultProps = {
  text: 'Label',
  name: 'label',
};

/**
 * Factory function to create a ShallowWrapper for the Label component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Label {...setupProps} />);
};

describe('<Label/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Renders the Label Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-label');
    expect(component.length).toBe(1);
  });
});
