import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { checkProps, findByTestAttr } from '../../../utils/test-utilities';

import WordCard from './WordCard';

const defaultProps = {
  contrast: false,
  title: 'title',
  slug: 'slug',
  terms: [],
  acf: {
    syllables: {
      count: '1',
      list: [{ item: 'test' }],
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

  // it('should call the sortTerms on mount', () => {
  //   const props = {
  //     terms: [
  //       {
  //         name: 'category',
  //         slug: 'slug',
  //         taxonomy: 'word_category',
  //       },
  //       {
  //         name: 'tag',
  //         slug: 'slug',
  //         taxonomy: 'word_tag',
  //       },
  //     ],
  //   };
  //
  //   wrapper.setProps({ ...props });
  //   wrapper.instance().sortTerms();
  //
  //   expect(wrapper.instance().categories[0].name).toBe(props.terms[0].name);
  //   expect(wrapper.instance().tags[0].name).toBe(props.terms[1].name);
  // });

  // xit('should call the sortTerms on mount', () => {
  //   const tag = findByTestAttr(wrapper, 'word-card-tag');
  //   const category = findByTestAttr(wrapper, 'word-card-category');
  //   const props = {
  //     terms: [
  //       {
  //         name: 'category',
  //         slug: 'slug',
  //         taxonomy: 'word_category',
  //       },
  //       {
  //         name: 'tag',
  //         slug: 'slug',
  //         taxonomy: 'word_tag',
  //       },
  //     ],
  //   };
  //
  //   wrapper.instance().categories = [{ ...props.terms[0] }];
  //   wrapper.instance().tags = [{ ...props.terms[1] }];
  //   wrapper.instance().render();
  //
  //   expect(wrapper.instance().categories).toEqual([props.terms[0]]);
  //   expect(wrapper.instance().tags).toEqual([props.terms[1]]);
  //   expect(tag.length).toBe(1);
  //   expect(category.length).toBe(1);
  // });
});
