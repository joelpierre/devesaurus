import React from 'react';
import { shallow } from 'enzyme';

import ConnectedWordTemplate, { WordTemplate } from './WordTemplate';
import { checkProps, matchSnapshot } from '../../utils/test-utilities';

const defaultProps = {
  onGetWord: jest.fn(),
  clearWordData: jest.fn(),
  wordData: {
    acf: {
      components: [{ acf_fc_layout: 'WordPressAcf_Text_Block' }],
    },
  },
  pageContext: {
    title: 'test',
  },
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
});
