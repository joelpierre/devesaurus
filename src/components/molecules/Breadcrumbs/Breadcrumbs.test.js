import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { checkProps, findByTestAttr, matchSnapshot } from '../../../utils/test';

import Breadcrumbs from './Breadcrumbs';

const defaultProps = {};

/**
 * Factory function to create a ShallowWrapper for the Breadcrumbs component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Breadcrumbs {...setupProps} />);
};

describe('<Breadcrumbs/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the Breadcrumbs Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-breadcrumbs');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(Breadcrumbs, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});
