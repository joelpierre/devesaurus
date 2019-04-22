import moxios from 'moxios';
import { put } from 'redux-saga/effects';
import { getWordSaga } from './word.saga';
import { getWordDataFailed, setWordData } from '../actions';

describe('Word saga flow', () => {
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

  it('should call getWordSaga success', () => {
    generator = getWordSaga({ data: 2 });

    moxios.wait(() => {
      request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response: {
          data: {
            test: 'getWordSaga',
          },
        },
      });
    });

    generator.next();

    expect(generator.next({ test: 'getWordSaga' }).value).toEqual(
      put(setWordData())
    );
    expect(generator.next().done).toBeTruthy();
  });

  it('should call getWordSaga fail', () => {
    generator = getWordSaga({ data: 2 });

    moxios.wait(() => {
      request = moxios.requests.mostRecent();

      request.respondWith({
        status: 404,
      });
    });

    generator.next();

    expect(generator.next().value).toEqual(put(getWordDataFailed()));
    expect(generator.next().done).toBeTruthy();
  });
});
