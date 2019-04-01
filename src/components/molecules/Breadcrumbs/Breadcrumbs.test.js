import React from 'react';
import { shallow } from 'enzyme';

import Breadcrumbs from './Breadcrumbs';
import { findByTestAttr } from '../../../utils/test-utilities';

const defaultProps = {};

/**
 * Factory function to create a ShallowWrapper for the Breadcrumbs component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Breadcrumbs {...setupProps}/>);
};

describe('<Breadcrumbs/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Renders the Breadcrumbs Component without errors', () => {
    const component = findByTestAttr(wrapper, 'VALUE_HERE');
    expect(component.length)
      .toBe(1);
  });


});
