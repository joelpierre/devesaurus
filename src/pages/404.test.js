import React from 'react';
import { shallow } from 'enzyme';

import ConnectedNotFoundPage, { NotFoundPage } from './404';
import { checkProps, findByTestAttr, matchSnapshot } from '../utils/test';

const defaultProps = {
  isMenuOpen: false,
};

/**
 * Factory function to create a ShallowWrapper for the NotFoundPage component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<NotFoundPage {...setupProps} />);
};

describe('<NotFoundPage/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the NotFoundPage Component without errors', () => {
    const component = findByTestAttr(wrapper, 'page-error-404');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(NotFoundPage, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});
