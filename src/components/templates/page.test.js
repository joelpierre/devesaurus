import React from 'react';
import { shallow } from 'enzyme';

import ConnectedPageTemplate, { PageTemplate } from './page';
import { Provider } from 'react-redux';
import { mockStore } from '../../utils/test-utilities';
import * as testUtils from '../../utils';

const defaultProps = {
  onGetPage: jest.fn(),
  clearPageData: jest.fn(),
  pageData: {},
  pageContext: {
    title: 'test',
    acf: {
      components: [{ acf_fc_layout: 'WordPressAcf_Text_Block' }],
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

  it('Renders the PageTemplate Component without errors', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should call getPageData when mounted', () => {
    wrapper.instance().componentDidMount();
    expect(defaultProps.onGetPage.mock.calls.length).toBe(1);
    expect(defaultProps.onGetPage).toHaveBeenCalledWith(
      defaultProps.pageContext
    );
  });

  it('should call mapOverACFComponents()', () => {
    testUtils.mapOverACFComponents = jest.fn();

    wrapper.setProps({
      pageData: {
        acf: {
          page_theme: 'brand',
          components: [],
        },
      },
    });
    wrapper.instance().componentDidUpdate({ ...defaultProps });

    expect(testUtils.mapOverACFComponents).toHaveBeenCalled();
  });

  it('should call clearPageData on unmount', () => {
    wrapper.instance().componentWillUnmount();
    expect(defaultProps.clearPageData.mock.calls.length).toBe(1);
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
