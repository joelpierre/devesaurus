import pageReducer, { initialState } from './page.reducer';
import { pageActionTypes } from '../actionTypes';

describe('Page Reducer', () => {
  it('returns default initial state', () => {
    const state = pageReducer(undefined, {});
    expect(state).toEqual({});
  });

  it('returns updated pageData state', () => {
    const state = pageReducer(
      { ...initialState },
      {
        type: pageActionTypes.SET_PAGE_DATA,
        data: {
          title: 'test',
        },
      }
    );

    expect(state.title).toBe('test');
  });

  it('clears the pageData state', () => {
    const state = pageReducer(
      { ...initialState },
      {
        type: pageActionTypes.CLEAR_PAGE_DATA,
      }
    );

    expect(state).toEqual({});
  });
});
