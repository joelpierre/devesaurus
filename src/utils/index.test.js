import 'jsdom-global/register';
import {
  breakpoint,
  mapOverACFComponents,
  mapTaxonomyTheme,
  randNumBetween,
  sortWordObj,
  updateObject,
} from './index';
import { mockWord } from '../../__mocks__/mock-words';

describe('Test util functions', () => {
  it('should update the object', () => {
    const oldObj = { test: 'hello' };
    const newObj = { test: 'hi there' };

    const func = updateObject(oldObj, newObj);

    expect(func).toEqual(newObj);
  });

  it('should re-write acf component name', () => {
    const components = [
      {
        acf_fc_layout: 'WordPressAcf_Text_Block',
      },
    ];

    const func = mapOverACFComponents(components);

    expect(func[0].acf_fc_layout).toBe('Text_Block');
  });

  it('should sortWordObj and deleted relevant fields', () => {
    // Mock Word from server
    const serverWord = {
      ...mockWord,
      author_id: '',
      author: '',
      author_nicename: '',
      content: '',
      date_modified: '',
      excerpt: '',
      yoast: '',
    };

    const word = { ...serverWord };

    // Run Function
    sortWordObj(word);

    expect(word).not.toEqual(serverWord);
    expect(word).toEqual(mockWord);
  });

  it('sortWordObj should fail', () => {
    // Run Function
    sortWordObj();

    expect(sortWordObj()).toBe(false);
  });

  it('should generate random number between 1 and 10 by default', () => {
    expect(randNumBetween()).toBeGreaterThanOrEqual(0);
    expect(randNumBetween()).toBeLessThanOrEqual(10);
  });

  it('should generate random number between min and max by default', () => {
    const min = 20;
    const max = 50;
    expect(randNumBetween(min, max)).toBeGreaterThanOrEqual(20);
    expect(randNumBetween(min, max)).toBeLessThanOrEqual(50);
  });

  it('should return a theme', () => {
    expect(mapTaxonomyTheme()).toEqual('brand');
    expect(mapTaxonomyTheme('development')).toEqual('alpha');
    expect(mapTaxonomyTheme('design')).toEqual('beta');
    expect(mapTaxonomyTheme('css')).toEqual('gamma');
    expect(mapTaxonomyTheme('html')).toEqual('psi');
    expect(mapTaxonomyTheme('news')).toEqual('omega');
  });
});

describe('breakpoint', () => {
  let func;
  let xsmall;
  let small;
  let medium;
  let large;
  let xlarge;
  const sizes = {
    xsmall: '599px',
    small: '600px',
    medium: '900px',
    large: '1200px',
    xlarge: '1800px',
  };

  it('should return true for xsmall', () => {
    window.matchMedia = jest.fn(q => {
      return { matches: !!q.includes(sizes.xsmall) };
    });

    func = breakpoint;
    xsmall = func.is('xsmall');
    small = func.is('small');
    medium = func.is('medium');
    large = func.is('large');
    xlarge = func.is('xlarge');

    expect(xsmall).toBe(true);
    expect(small).toBe(false);
    expect(medium).toBe(false);
    expect(large).toBe(false);
    expect(xlarge).toBe(false);
  });

  it('should return true for small', () => {
    window.matchMedia = jest.fn(q => {
      return { matches: !!q.includes(sizes.small) };
    });

    func = breakpoint;
    xsmall = func.is('xsmall');
    small = func.is('small');
    medium = func.is('medium');
    large = func.is('large');
    xlarge = func.is('xlarge');

    expect(xsmall).toBe(false);
    expect(small).toBe(true);
    expect(medium).toBe(false);
    expect(large).toBe(false);
    expect(xlarge).toBe(false);
  });

  it('should return true for medium', () => {
    window.matchMedia = jest.fn(q => {
      return { matches: !!q.includes(sizes.medium) };
    });

    func = breakpoint;
    xsmall = func.is('xsmall');
    small = func.is('small');
    medium = func.is('medium');
    large = func.is('large');
    xlarge = func.is('xlarge');

    expect(xsmall).toBe(false);
    expect(small).toBe(false);
    expect(medium).toBe(true);
    expect(large).toBe(false);
    expect(xlarge).toBe(false);
  });

  it('should return true for large', () => {
    window.matchMedia = jest.fn(q => {
      return { matches: !!q.includes(sizes.large) };
    });

    func = breakpoint;
    xsmall = func.is('xsmall');
    small = func.is('small');
    medium = func.is('medium');
    large = func.is('large');
    xlarge = func.is('xlarge');

    expect(xsmall).toBe(false);
    expect(small).toBe(false);
    expect(medium).toBe(false);
    expect(large).toBe(true);
    expect(xlarge).toBe(false);
  });

  it('should return true for xlarge', () => {
    window.matchMedia = jest.fn(q => {
      return { matches: !!q.includes(sizes.xlarge) };
    });

    func = breakpoint;
    xsmall = func.is('xsmall');
    small = func.is('small');
    medium = func.is('medium');
    large = func.is('large');
    xlarge = func.is('xlarge');

    expect(xsmall).toBe(false);
    expect(small).toBe(false);
    expect(medium).toBe(false);
    expect(large).toBe(false);
    expect(xlarge).toBe(true);
  });
});
