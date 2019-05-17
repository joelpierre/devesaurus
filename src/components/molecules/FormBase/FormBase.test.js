import React from 'react';
import { shallow } from 'enzyme';

import { checkProps, findByTestAttr, matchSnapshot } from '../../../utils/test';

import FormBase from './FormBase';

const defaultProps = {};

/**
 * Factory function to create a ShallowWrapper for the FormBase component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<FormBase {...setupProps} />);
};

describe('<FormBase/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the FormBase Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-form-base');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(FormBase, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});
