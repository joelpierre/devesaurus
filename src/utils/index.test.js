import { mapOverACFComponents, updateObject } from './index';

describe('Test updateObject()', () => {
  it('should update the object', () => {
    const oldObj = { test: 'hello' };
    const newObj = { test: 'hi there' };

    const func = updateObject(oldObj, newObj);

    expect(func).toEqual(newObj);
  });
});

describe('Test mapOverACFComponents()', () => {
  it('should re-write acf component name', () => {
    const components = [
      {
        acf_fc_layout: 'WordPressAcf_Text_Block',
      },
    ];

    const func = mapOverACFComponents(components);

    expect(func[0].acf_fc_layout).toBe('Text_Block');
  });
});
