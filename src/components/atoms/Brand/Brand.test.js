import React from 'react';
import Brand from './Brand';
import { shallow } from 'enzyme';
import { checkProps, findByTestAttr, matchSnapshot } from '../../../utils/test';
import toJson from 'enzyme-to-json';
import SvgIcon from '../SvgIcon/SvgIcon';
import SiteInfo from '../SiteInfo/SiteInfo';

const defaultProps = {};

/**
 * Factory function to create a ShallowWrapper fro the App component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Brand {...setupProps} />);
};

describe('<Brand/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('should render Brand Component', () => {
    const component = findByTestAttr(wrapper, 'component-brand');
    expect(component).toBeTruthy();
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(Brand, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });

  it('should render SiteInfo component', () => {
    expect(wrapper.find(SiteInfo)).toBeTruthy();
  });

  it('should render the correct SVG', () => {
    wrapper = setup({ type: 'text-inv' });
    const findSVG = toJson(wrapper.find(SvgIcon));
    expect(findSVG.props.name).toBe('logo-text-inv');
  });

  it('should render the correct SVG', () => {
    wrapper = setup({ type: 'logo-inv' });
    const findSVG = toJson(wrapper.find(SvgIcon));
    expect(findSVG.props.name).toBe('logo-inv');
  });
});
