import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../utils/test-utilities';

import TeamCard from './TeamCard';

const defaultProps = {
  firstName: 'First Name',
  lastName: 'Last Name',
  jobTitle: 'CEO',
  bio: 'lorem ipsum',
  link: 'slug',
};

/**
 * Factory function to create a ShallowWrapper for the TeamCard component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<TeamCard {...setupProps}/>);
};

describe('<TeamCard/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Renders the TeamCard Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-team-card');
    expect(component.length)
      .toBe(1);
  });


});
