import postReducer, { initialState } from './post.reducer';
import { postActionTypes } from '../actionTypes';

describe('Post Reducer', () => {
  it('returns default initial state', () => {
    const state = postReducer(undefined, {});
    expect(state).toEqual({});
  });

  it('returns updated postData state', () => {
    const state = postReducer(
      { ...initialState },
      {
        type: postActionTypes.SET_POST_DATA,
        data: {
          title: 'test',
        },
      }
    );

    expect(state.title).toBe('test');
  });

  it('clears the postData state', () => {
    const state = postReducer(
      { ...initialState },
      {
        type: postActionTypes.CLEAR_POST_DATA,
      }
    );

    expect(state).toEqual({});
  });
});
