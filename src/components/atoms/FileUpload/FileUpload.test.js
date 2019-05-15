import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { checkProps, findByTestAttr, matchSnapshot } from '../../../utils/test';

import FileUpload from './FileUpload';

const defaultProps = {
  name: 'test',
};

/**
 * Factory function to create a ShallowWrapper for the FileUpload component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<FileUpload {...setupProps} />);
};

describe('<FileUpload/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the FileUpload Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-file-upload');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(FileUpload, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});
