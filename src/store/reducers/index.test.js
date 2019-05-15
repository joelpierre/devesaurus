import rootReducer from './index';

describe('CombineReducers', () => {
  it('Should have a rootReducer', () => {
    const reducer = rootReducer;
    expect(reducer).toBeTruthy();
  });
});
