import 'jsdom-global/register';
import moxios from 'moxios';
import { put } from 'redux-saga/effects';
import { getWordSaga } from './word.saga';
import { getWordDataFailed, setWordData } from '../actions';

describe('Word saga flow', () => {
  let generator;

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
    generator = null;
  });

  it('should call getWordSaga success', () => {
    generator = getWordSaga({ data: 2 });

    generator.next();

    expect(generator.next({ test: 'getWordSaga' }).value).toEqual(
      put(setWordData())
    );
    expect(generator.next().done).toBeTruthy();
  });

  it('should call getWordSaga fail', () => {
    generator = getWordSaga({ data: 2 });

    generator.next();

    expect(generator.next().value).toEqual(put(getWordDataFailed()));
    expect(generator.next().done).toBeTruthy();
  });
});
