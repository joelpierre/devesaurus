import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { checkProps, findByTestAttr, matchSnapshot } from '../../../utils/test';

import ImageBlock from './ImageBlock';

const defaultProps = {
  module: {
    theme: 'alpha',
  },
};

/**
 * Factory function to create a ShallowWrapper for the ImageBlock component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<ImageBlock {...setupProps} />);
};

describe('<ImageBlock/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the ImageBlock Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-image-block');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(ImageBlock, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });

  it('should render with pageTheme instead of module theme', () => {
    wrapper = setup({
      module: {},
      pageTheme: 'brand',
    });
    const component = findByTestAttr(wrapper, 'component-image-block');
    matchSnapshot(wrapper);
    expect(component.prop('className')).toContain('theme--brand');
  });
});
