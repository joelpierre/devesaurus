import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../utils/test-utilities';

import HeroSearch from './HeroSearch';

const defaultProps = {};

/**
 * Factory function to create a ShallowWrapper for the HeroSearch component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<HeroSearch {...setupProps}/>);
};

describe('<HeroSearch/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Renders the HeroSearch Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-hero-search');
    expect(component.length)
      .toBe(1);
  });


});
