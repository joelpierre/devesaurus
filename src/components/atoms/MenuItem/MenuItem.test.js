import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { checkProps, findByTestAttr, matchSnapshot } from '../../../utils/test';

import MenuItem from './MenuItem';

const defaultProps = {
  item: {
    title: 'Test Title',
    url: 'test',
    attr: 'anchor',
    classes: 'faHeart',
    object_slug: 'test-title',
  },
  className: 'test-class',
};

/**
 * Factory function to create a ShallowWrapper for the MenuItem component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<MenuItem {...setupProps} />);
};

describe('<MenuItem/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the MenuItem Component without errors {item: { attr: "anchor" }}', () => {
    const component = findByTestAttr(wrapper, 'component-menu-item');
    expect(component.length).toBe(1);
  });

  it('renders the MenuItem Component without errors {item: { title: undefined, attr: "anchor" }}', () => {
    wrapper = setup({
      item: {
        ...defaultProps.item,
        title: undefined,
      },
    });
    const component = findByTestAttr(wrapper, 'component-menu-item');
    expect(component.length).toBe(1);
  });

  it('renders the MenuItem Component without errors {item: { attr: "" }}', () => {
    wrapper = setup({
      item: {
        ...defaultProps.item,
        attr: '',
      },
    });
    const component = findByTestAttr(wrapper, 'component-menu-item');
    expect(component.length).toBe(1);
  });

  it('renders the MenuItem Component without errors {item: { title: undefined, attr: "" }}', () => {
    wrapper = setup({
      item: {
        ...defaultProps.item,
        title: undefined,
        attr: '',
      },
    });
    const component = findByTestAttr(wrapper, 'component-menu-item');
    expect(component.length).toBe(1);
  });

  it('renders the MenuItem Component without errors {item: { attr: "divider" }}', () => {
    wrapper = setup({
      item: {
        ...defaultProps.item,
        attr: 'divider',
      },
    });
    const component = findByTestAttr(wrapper, 'component-menu-item');
    expect(component.length).toBe(1);
  });

  it('renders the MenuItem Component without errors {item: { title: undefined, attr: "divider" }}', () => {
    wrapper = setup({
      item: {
        ...defaultProps.item,
        title: undefined,
        attr: 'divider',
      },
    });
    const component = findByTestAttr(wrapper, 'component-menu-item');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(MenuItem, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});
