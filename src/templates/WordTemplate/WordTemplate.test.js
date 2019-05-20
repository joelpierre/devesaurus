import React from 'react';
import { shallow } from 'enzyme/build';

import ConnectedWordTemplate, { WordTemplate } from './WordTemplate';
import { checkProps, matchSnapshot } from '../../utils/test';
import * as utils from '../../utils';

const defaultProps = {
  onGetWord: jest.fn(),
  clearWordData: jest.fn(),
  pageData: {
    acf: {
      pronunciation: 'test',
      components: [{ acf_fc_layout: 'WordPressAcf_Text_Block' }],
    },
  },
  pageContext: {
    title: 'test',
    slug: 'test-slug',
    acf: {
      pronunciation: 'test',
    },
    yoast_meta: {
      yoast_wpseo_metadesc: '',
    },
  },
  isMenuOpen: false,
  setMenuState: jest.fn(),
};

/**
 * Factory function to create a ShallowWrapper for the WordTemplate component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<WordTemplate {...setupProps} />);
};

describe('<WordTemplate/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Renders the WordTemplate Component without errors', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render with correct props', () => {
    checkProps(WordTemplate, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });

  it('should call getWordData when mounted', () => {
    wrapper.instance().componentDidMount();
    expect(defaultProps.onGetWord.mock.calls.length).toBe(1);
    expect(defaultProps.onGetWord).toHaveBeenCalledWith(
      defaultProps.pageContext
    );
  });

  it('should call mapOverACFComponents()', () => {
    utils.sortWordObj = jest.fn();

    wrapper.setProps({
      pageData: {
        acf: {
          page_theme: 'brand',
          components: [],
        },
      },
    });
    wrapper.instance().componentDidUpdate({ ...defaultProps });

    expect(utils.sortWordObj).toHaveBeenCalled();
  });

  it('should call clearWordData on unmount', () => {
    wrapper.instance().componentWillUnmount();
    expect(defaultProps.clearWordData.mock.calls.length).toBe(1);
  });
});
