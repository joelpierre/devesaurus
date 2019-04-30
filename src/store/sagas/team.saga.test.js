import moxios from 'moxios';
import { put } from 'redux-saga/effects';
import { getTeamSaga } from './team.saga';
import { getTeamDataFailed, setTeamData } from '../actions';

describe('Team saga flow', () => {
  let generator;

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
    generator = null;
  });

  it('should call getTeamSaga success', () => {
    generator = getTeamSaga();

    generator.next();

    expect(generator.next({ test: 'getTeamSaga' }).value).toEqual(
      put(setTeamData())
    );
    expect(generator.next().done).toBeTruthy();
  });

  it('should call getTeamSaga fail', () => {
    generator = getTeamSaga();

    generator.next();

    expect(generator.next().value).toEqual(put(getTeamDataFailed()));
    expect(generator.next().done).toBeTruthy();
  });
});
