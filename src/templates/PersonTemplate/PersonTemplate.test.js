import React from 'react';
import { shallow } from 'enzyme/build';

import ConnectedPersonTemplate, { PersonTemplate } from './PersonTemplate';
import { checkProps, findByTestAttr, matchSnapshot } from '../../utils/test';
import * as utils from '../../utils';

const defaultProps = {
  onGetPerson: jest.fn(),
  clearPersonData: jest.fn(),
  isMenuOpen: false,
  setMenuState: jest.fn(),
  pageData: {
    acf: {
      page_theme: 'brand',
      components: [{ acf_fc_layout: 'WordPressAcf_Text_Block' }],
    },
  },
  pageContext: {
    title: 'test',
    slug: 'test-slug',
    yoast_meta: {
      yoast_wpseo_metadesc: '',
    },
  },
};

/**
 * Factory function to create a ShallowWrapper for the PersonTemplate component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<PersonTemplate {...setupProps} />);
};

describe('<PersonTemplate/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Renders the PersonTemplate Component without errors', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render PersonTemplate', () => {
    const template = findByTestAttr(wrapper, 'template-person');
    expect(template).toBeTruthy();
    expect(template.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(PersonTemplate, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });

  it('should call getPersonData when mounted', () => {
    wrapper.instance().componentDidMount();
    expect(defaultProps.onGetPerson.mock.calls.length).toBe(1);
    expect(defaultProps.onGetPerson).toHaveBeenCalledWith(
      defaultProps.pageContext
    );
  });

  it('should call mapOverACFComponents()', () => {
    utils.mapOverACFComponents = jest.fn();

    wrapper.setProps({
      pageData: {
        acf: {
          page_theme: 'brand',
          components: [],
        },
      },
    });
    wrapper.instance().componentDidUpdate({ ...defaultProps });

    expect(utils.mapOverACFComponents).toHaveBeenCalled();
  });

  it('should call clearPersonData on unmount', () => {
    wrapper.instance().componentWillUnmount();
    expect(defaultProps.clearPersonData.mock.calls.length).toBe(1);
  });
});
