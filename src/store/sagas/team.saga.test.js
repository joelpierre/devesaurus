import moxios from 'moxios';
import { put } from 'redux-saga/effects';
import { getTeamSaga } from './team.saga';
import { getTeamDataFailed, setTeamData } from '../actions';

describe('Team saga flow', () => {
  let generator;
  let request;

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
    generator = null;
    request = null;
  });

  it('should call getTeamSaga success', () => {
    generator = getTeamSaga();

    moxios.wait(() => {
      request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response: {
          data: {
            test: 'getTeamSaga',
          },
        },
      });
    });

    generator.next();

    expect(generator.next({ test: 'getTeamSaga' }).value).toEqual(
      put(setTeamData())
    );
    expect(generator.next().done).toBeTruthy();
  });

  it('should call getTeamSaga fail', () => {
    generator = getTeamSaga();

    moxios.wait(() => {
      request = moxios.requests.mostRecent();

      request.respondWith({
        status: 404,
      });
    });

    generator.next();

    expect(generator.next().value).toEqual(put(getTeamDataFailed()));
    expect(generator.next().done).toBeTruthy();
  });
});
