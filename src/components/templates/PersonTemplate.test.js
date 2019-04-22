import React from 'react';
import { shallow } from 'enzyme';

import ConnectedPersonTemplate, { PersonTemplate } from './PersonTemplate';
import { checkProps, matchSnapshot } from '../../utils/test-utilities';

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
  return shallow(<PersonTemplate {...setupProps} />);
};

describe('<PersonTemplate/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Renders the PersonTemplate Component without errors', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render with correct props', () => {
    checkProps(PersonTemplate, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});
