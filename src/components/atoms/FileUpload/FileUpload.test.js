import React from 'react';
import { shallow } from 'enzyme';

import FileUpload from './FileUpload';
import { findByTestAttr } from '../../../utils/test-utilities';

const defaultProps = {};

/**
 * Factory function to create a ShallowWrapper for the FileUpload component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<FileUpload {...setupProps}/>);
};

describe('<FileUpload/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Renders the FileUpload Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-file-upload');
    expect(component.length)
      .toBe(1);
  });


});
