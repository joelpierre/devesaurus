import { mapOverACFComponents, sortWordObj, updateObject } from './index';
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
});
