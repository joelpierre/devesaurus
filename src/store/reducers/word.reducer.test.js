import wordReducer, { initialState } from './word.reducer';
import { wordActionTypes } from '../actionTypes';

describe('Word Reducer', () => {

  it('returns default initial state', () => {
    const state = wordReducer(undefined, {});
    expect(state.data)
      .toBe(null);
  });

  it('returns updated wordData state', () => {
    const state = wordReducer({ ...initialState }, {
      type: wordActionTypes.SET_WORD_DATA,
      data: {
        title: 'test',
      },
    });

    expect(state.data.title)
      .toBe('test');
  });

  it('clears the wordData state', () => {
    const state = wordReducer({ ...initialState }, {
      type: wordActionTypes.CLEAR_WORD_DATA,
    });

    expect(state.data)
      .toBe(null);
  });
});
