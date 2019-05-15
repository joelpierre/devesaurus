import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { checkProps, findByTestAttr, matchSnapshot } from '../../../utils/test';
import { mockWords } from '../../../../__mocks__/mock-words';
import FeaturedWords from './FeaturedWords';
import * as utils from '../../../utils';

const defaultProps = {
  words: [
    {
      node: {
        ...mockWords[0],
      },
    },
    {
      node: {
        ...mockWords[1],
      },
    },
    {
      node: {
        ...mockWords[2],
      },
    },
  ],
};
/**
 * Factory function to create a ShallowWrapper for the FeaturedWords component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<FeaturedWords {...setupProps} />);
};

describe('<FeaturedWords/>', () => {
  let wrapper;
  utils.sortWordObj = jest.fn();

  beforeEach(() => {
    wrapper = setup();
    // console.log(wrapper.debug());
  });

  it('renders the FeaturedWords Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-featured-words');
    expect(component.length).toBe(1);
  });

  it('renders the FeaturedWords Word element without errors', () => {
    const component = findByTestAttr(wrapper, 'featured-words-word');
    expect(component.length).toBeGreaterThanOrEqual(3);
  });

  it('should fire sortWords on mount', () => {
    wrapper.instance().sortWords = jest.fn();
    wrapper.instance().componentDidMount();
    expect(wrapper.instance().sortWords).toHaveBeenCalled();
  });

  it('should fire sortWord on sortWords fire', () => {
    wrapper.instance().sortWords();

    expect(utils.sortWordObj).toHaveBeenCalled();
  });

  it('should render with correct props', () => {
    checkProps(FeaturedWords, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});
