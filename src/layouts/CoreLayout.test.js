import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import {
  checkProps,
  findByTestAttr,
  matchSnapshot,
} from '../utils/test-utilities';
import { CoreLayout } from './CoreLayout';

const defaultProps = {
  children: 'Hello',
  onGetSiteMeta: jest.fn(),
  onGetSiteOptions: jest.fn(),
};

/**
 * Factory function to create a ShallowWrapper for the CoreLayout component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<CoreLayout {...setupProps} />);
};

describe('<CoreLayout/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the CoreLayout Component without errors', () => {
    const component = findByTestAttr(wrapper, 'core-layout-main');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(CoreLayout, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });

  it('should get siteMeta and siteOptions on componentDidMount', () => {
    wrapper = setup({
      onGetSiteMeta: jest.fn(),
      onGetSiteOptions: jest.fn(),
    });

    const spy1 = wrapper.instance().props.onGetSiteMeta;
    const spy2 = wrapper.instance().props.onGetSiteOptions;

    wrapper.instance().componentDidMount();

    expect(spy1).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
  });
});
