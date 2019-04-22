import moxios from 'moxios';
import { put } from 'redux-saga/effects';
import { getPostSaga } from './post.saga';
import { getPostDataFailed, setPostData } from '../actions';

describe('Post saga flow', () => {
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

  it('should call getPostSaga success', () => {
    generator = getPostSaga({ data: 2 });

    moxios.wait(() => {
      request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response: {
          data: {
            test: 'getPostSaga',
          },
        },
      });
    });

    generator.next();

    expect(generator.next({ test: 'getPostSaga' }).value).toEqual(
      put(setPostData())
    );
    expect(generator.next().done).toBeTruthy();
  });

  it('should call getPostSaga fail', () => {
    generator = getPostSaga({ data: 2 });

    moxios.wait(() => {
      request = moxios.requests.mostRecent();

      request.respondWith({
        status: 404,
      });
    });

    generator.next();

    expect(generator.next().value).toEqual(put(getPostDataFailed()));
    expect(generator.next().done).toBeTruthy();
  });
});
