import coreReducer, { initialState } from './core.reducer';
import { coreActionTypes } from '../actionTypes';

describe('Core Reducer', () => {
  it('returns default initial state', () => {
    const state = coreReducer(undefined, {});
    expect(state).toBe(initialState);
  });

  it('returns updated siteMeta state', () => {
    const state = coreReducer(
      { ...initialState },
      {
        type: coreActionTypes.SET_SITE_META,
        data: {
          name: 'test',
          description: 'description',
        },
      }
    );

    expect(state.title).toBe('test');
    expect(state.description).toBe('description');
  });

  it('returns updated siteSiteOptions state', () => {
    const state = coreReducer(
      { ...initialState },
      {
        type: coreActionTypes.SET_SITE_OPTIONS,
        data: { test: 'test' },
      }
    );

    expect(state.options.test).toBe('test');
  });
});
