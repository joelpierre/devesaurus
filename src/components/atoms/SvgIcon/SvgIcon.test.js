import React from 'react';

import SvgIcon from './SvgIcon';
import { shallow } from 'enzyme';

const defaultProps = {
  name: 'logo',
};

/**
 * Factory function to create a ShallowWrapper fro the App component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<SvgIcon {...setupProps} />);
};

describe('<SvgIcon/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Should render SvgIcon Component', () => {
    // expect(wrapper)
  });
});
