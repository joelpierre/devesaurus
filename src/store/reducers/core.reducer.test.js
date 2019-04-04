import coreReducer from './core.reducer';

describe('Core Reducer', () => {

  it('returns default initial state', () => {
    const state = coreReducer(undefined, {});
    expect(state)
      .toBeTruthy();
  });

});
