import React from 'react';
import { shallow } from 'enzyme';

import { UnconnectedPersonTemplate } from './person';

const defaultProps = {
  onGetPerson: jest.fn(),
  clearPersonData: jest.fn(),
};

/**
 * Factory function to create a ShallowWrapper for the PersonTemplate component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<UnconnectedPersonTemplate {...setupProps} />);
};

describe('<PersonTemplate/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Renders the PersonTemplate Component without errors', () => {
    expect(wrapper).toBeTruthy();
  });
});
