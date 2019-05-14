import 'jsdom-global/register';
import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { checkProps, findByTestAttr } from '../../../utils/test';

import WordCard from './WordCard';

const defaultProps = {
  contrast: false,
  title: 'title',
  slug: 'slug',
  terms: [
    {
      name: 'Design',
      slug: 'design',
      taxonomy: 'word_tag',
    },
    {
      name: 'Graphic Design',
      slug: 'graphic-design',
      taxonomy: 'word_category',
    },
  ],
  acf: {
    syllables: {
      count: '1',
      list: [{ item: 'test' }],
    },
    origin: {
      value: 'test',
      label: 'test',
    },
  },
};

/**
 * Factory function to create a ShallowWrapper for the WordCard component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<WordCard {...setupProps} />);
};

describe('<WordCard/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the WordCard Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-word-card');
    expect(component.length).toBe(1);
  });

  it('should match snapShot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should have correct props', () => {
    checkProps(WordCard, defaultProps);
  });

  it('should call the sortTerms on mount', () => {
    const spy = (wrapper.instance().sortTerms = jest.fn());
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });

  it('should add terms to state', () => {
    wrapper.instance().sortTerms();
    expect(wrapper.state().tags).toEqual([defaultProps.terms[0]]);
    expect(wrapper.state().categories).toEqual([defaultProps.terms[1]]);
  });

  it('should mount component and subsequent components', () => {
    wrapper = mount(<WordCard {...defaultProps} />);

    const tags = findByTestAttr(wrapper, 'word-card-tag');
    const cats = findByTestAttr(wrapper, 'word-card-category');

    expect(tags.length).toBe(1);
    expect(cats.length).toBe(1);

    expect(wrapper).toMatchSnapshot();
  });
});
