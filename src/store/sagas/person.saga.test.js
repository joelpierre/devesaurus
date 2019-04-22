import moxios from 'moxios';
import { put } from 'redux-saga/effects';
import { getPersonSaga } from './person.saga';
import { getPersonDataFailed, setPersonData } from '../actions';

describe('Person saga flow', () => {
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

  it('should call getPersonSaga success', () => {
    generator = getPersonSaga({ data: 2 });

    moxios.wait(() => {
      request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response: {
          data: {
            test: 'getPersonSaga',
          },
        },
      });
    });

    generator.next();

    expect(generator.next({ test: 'getPersonSaga' }).value).toEqual(
      put(setPersonData())
    );
    expect(generator.next().done).toBeTruthy();
  });

  it('should call getPersonSaga fail', () => {
    generator = getPersonSaga({ data: 2 });

    moxios.wait(() => {
      request = moxios.requests.mostRecent();

      request.respondWith({
        status: 404,
      });
    });

    generator.next();

    expect(generator.next().value).toEqual(put(getPersonDataFailed()));
    expect(generator.next().done).toBeTruthy();
  });
});
