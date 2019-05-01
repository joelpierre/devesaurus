import React from 'react';
import { shallow } from 'enzyme/build';

import ConnectedPageTemplate, { PageTemplate } from './PageTemplate';
import { Provider } from 'react-redux';
import {
  checkProps,
  findByTestAttr,
  matchSnapshot,
  mockStore,
} from '../../../utils/test';
import * as utils from '../../../utils';

const defaultProps = {
  onGetPage: jest.fn(),
  clearPageData: jest.fn(),
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
 * Factory function to create a ShallowWrapper for the PageTemplate component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<PageTemplate {...setupProps} />);
};

describe('<PageTemplate/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the PageTemplate Component without errors', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render PageTemplate', () => {
    const template = findByTestAttr(wrapper, 'template-page');
    expect(template).toBeTruthy();
    expect(template.length).toBe(1);
  });

  it('should call getPageData when mounted', () => {
    wrapper.instance().componentDidMount();
    expect(defaultProps.onGetPage.mock.calls.length).toBe(1);
    expect(defaultProps.onGetPage).toHaveBeenCalledWith(
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

  it('should call clearPageData on unmount', () => {
    wrapper.instance().componentWillUnmount();
    expect(defaultProps.clearPageData.mock.calls.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(PageTemplate, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});

describe('<ConnectedPageTemplate/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={mockStore()}>
        <ConnectedPageTemplate />
      </Provider>
    );
  });

  it('should render connected component', () => {
    expect(wrapper).toBeTruthy();
  });
});
