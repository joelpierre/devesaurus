import moxios from 'moxios';
import { put } from 'redux-saga/effects';
import { getPostSaga } from './post.saga';
import { getPostDataFailed, setPostData } from '../actions';

describe('Post saga flow', () => {
  let generator;

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
    generator = null;
  });

  it('should call getPostSaga success', () => {
    generator = getPostSaga({ data: 2 });

    generator.next();

    expect(generator.next({ test: 'getPostSaga' }).value).toEqual(
      put(setPostData())
    );
    expect(generator.next().done).toBeTruthy();
  });

  it('should call getPostSaga fail', () => {
    generator = getPostSaga({ data: 2 });

    generator.next();

    expect(generator.next().value).toEqual(put(getPostDataFailed()));
    expect(generator.next().done).toBeTruthy();
  });
});
