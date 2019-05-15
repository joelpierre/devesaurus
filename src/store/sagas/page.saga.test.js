import moxios from 'moxios';
import { put } from 'redux-saga/effects';
import { getPageSaga } from './page.saga';
import { getPageDataFailed, setPageData } from '../actions';

describe('Page saga flow', () => {
  let generator;

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
    generator = null;
  });

  it('should call getPageSaga success', () => {
    generator = getPageSaga({ data: 2 });

    generator.next();

    expect(generator.next({ test: 'getPageSaga' }).value).toEqual(
      put(setPageData())
    );
    expect(generator.next().done).toBeTruthy();
  });

  it('should call getPageSaga fail', () => {
    generator = getPageSaga({ data: 2 });

    generator.next();

    expect(generator.next().value).toEqual(put(getPageDataFailed()));
    expect(generator.next().done).toBeTruthy();
  });
});
