import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { checkProps, findByTestAttr, matchSnapshot } from '../../../utils/test';

import Row from './Row';

const defaultProps = {
  children: '<div/>',
};

/**
 * Factory function to create a ShallowWrapper for the Row component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Row {...setupProps} />);
};

describe('<Row/>', () => {
  let wrapper;
  let component;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the Row Component without errors', () => {
    component = findByTestAttr(wrapper, 'component-grid-row');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(Row, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });

  it('renders with class row', () => {
    wrapper = setup({
      row: true,
    });
    component = findByTestAttr(wrapper, 'component-grid-row');
    matchSnapshot(wrapper);
    expect(component.hasClass('row')).toBeTruthy();
  });

  it('renders with class column', () => {
    wrapper = setup({
      column: true,
    });
    component = findByTestAttr(wrapper, 'component-grid-row');
    matchSnapshot(wrapper);
    expect(component.hasClass('row--column')).toBeTruthy();
  });

  it('renders with class reverse row', () => {
    wrapper = setup({
      row: true,
      reverse: true,
    });
    component = findByTestAttr(wrapper, 'component-grid-row');
    matchSnapshot(wrapper);
    expect(component.hasClass('row--reverse')).toBeTruthy();
  });

  it('renders with class column reverse row', () => {
    wrapper = setup({
      row: false,
      reverse: true,
      column: true,
    });
    component = findByTestAttr(wrapper, 'component-grid-row');
    matchSnapshot(wrapper);
    expect(component.hasClass('row--column-reverse')).toBeTruthy();
  });
});
