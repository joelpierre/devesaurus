import {
  coreActionTypes,
  postActionTypes,
  teamActionTypes,
  wordActionTypes,
} from './index';

describe('test ActionTypes', () => {
  it('Action Types should exist', () => {
    expect(coreActionTypes).toBeTruthy();
    expect(wordActionTypes).toBeTruthy();
    expect(postActionTypes).toBeTruthy();
    expect(teamActionTypes).toBeTruthy();
  });
});
