import React from 'react';
import { shallow } from 'enzyme';

import { checkProps, findByTestAttr, matchSnapshot } from '../../../utils/test';

import SimpleHeader from './SimpleHeader';

const defaultProps = {};

/**
 * Factory function to create a ShallowWrapper for the SimpleHeader component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<SimpleHeader {...setupProps} />);
};

describe('<SimpleHeader/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the SimpleHeader Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-simple-header');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(SimpleHeader, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});
