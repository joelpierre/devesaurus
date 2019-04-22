import { mockWord } from '../../__mocks__/mock-words';
import { sortWordObj } from './index';

describe('test helper functions', () => {
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
      id: '',
      yoast: '',
    };

    const word = { ...serverWord };

    // Run Function
    sortWordObj(word);

    expect(word).not.toEqual(serverWord);
    expect(word).toEqual(mockWord);
  });
});
