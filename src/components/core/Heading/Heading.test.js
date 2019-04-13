import React from 'react';
import { shallow } from 'enzyme';

import { checkProps, findByTestAttr } from '../../../utils/test-utilities';

import Heading from './Heading';

const defaultProps = {
  children: 'heading text',
  priority: '1',
};

/**
 * Factory function to create a ShallowWrapper for the Heading component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Heading {...setupProps} />);
};

describe('<Heading/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Renders the Heading Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-heading');
    expect(component.length).toBe(1);
  });

  it('does not throw warning with expected props', () => {
    checkProps(Heading, defaultProps);
  });
});
