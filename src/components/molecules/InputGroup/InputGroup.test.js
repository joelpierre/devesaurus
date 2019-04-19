import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import {
  checkProps,
  findByTestAttr,
  matchSnapshot,
} from '../../../utils/test-utilities';

import InputGroup from './InputGroup';
import Button from '../Buttons/Button';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';
import InputField from '../../atoms/InputField/InputField';

const defaultProps = {
  name: 'test-name',
  type: 'text',
};

/**
 * Factory function to create a ShallowWrapper for the InputGroup component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<InputGroup {...setupProps} />);
};

describe('<InputGroup/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  afterEach(() => {
    wrapper = setup();
  });

  it('renders the InputGroup Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-input-group');
    expect(component.length).toBe(1);
  });

  it('should render the correct input text', () => {
    const component = findByTestAttr(wrapper, 'input-group-input');
    expect(component.length).toBe(1);
    expect(wrapper.find(InputField)).not.toBeUndefined();
  });

  it('should render the correct input number', () => {
    wrapper = setup({ ...defaultProps, type: 'number' });
    const component = findByTestAttr(wrapper, 'input-group-input');
    expect(component.length).toBe(1);
    expect(wrapper.find(InputField)).not.toBeUndefined();
  });

  it('should render with correct props', () => {
    checkProps(InputGroup, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });

  it('should match snapshot with prepend button', () => {
    wrapper = setup({
      ...defaultProps,
      prepend: {
        button: {
          text: 'test',
          link: '#',
          size: 'md',
          behavior: 'action',
        },
      },
    });

    const component = findByTestAttr(wrapper, 'input-group-button');
    expect(component.length).toBe(1);
    matchSnapshot(wrapper);
    expect(wrapper.find(Button)).not.toBeUndefined();
  });

  it('should match snapshot with prepend icon', () => {
    wrapper = setup({
      ...defaultProps,
      prepend: {
        icon: 'complete',
      },
    });
    const component = findByTestAttr(wrapper, 'input-group-icon');
    expect(component.length).toBe(1);
    matchSnapshot(wrapper);
    expect(wrapper.find(SvgIcon)).not.toBeUndefined();
  });

  it('should match snapshot with prepend text', () => {
    wrapper = setup({
      ...defaultProps,
      prepend: {
        text: 'test',
      },
    });
    const component = findByTestAttr(wrapper, 'input-group-text');
    expect(component.length).toBe(1);
    matchSnapshot(wrapper);
  });

  it('should match snapshot with append button', () => {
    wrapper = setup({
      ...defaultProps,
      append: {
        button: {
          text: 'test',
          link: '#',
          size: 'md',
          behavior: 'action',
        },
      },
    });
    const component = findByTestAttr(wrapper, 'input-group-button');
    expect(component.length).toBe(1);
    matchSnapshot(wrapper);
    expect(wrapper.find(Button)).not.toBeUndefined();
  });

  it('should match snapshot with append icon', () => {
    wrapper = setup({
      ...defaultProps,
      append: {
        icon: 'complete',
      },
    });

    const component = findByTestAttr(wrapper, 'input-group-icon');
    expect(component.length).toBe(1);
    matchSnapshot(wrapper);
    expect(wrapper.find(SvgIcon)).not.toBeUndefined();
  });

  it('should match snapshot with append text', () => {
    wrapper = setup({
      ...defaultProps,
      append: {
        text: 'test',
      },
    });
    const component = findByTestAttr(wrapper, 'input-group-text');
    expect(component.length).toBe(1);
    matchSnapshot(wrapper);
  });
});
