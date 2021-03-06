import moxios from 'moxios';
import { getSiteMetaSaga, getSiteOptionsSaga } from './core.saga';
import { put } from 'redux-saga/effects';
import {
  getSiteMetaFailed,
  getSiteOptionsFailed,
  setSiteMeta,
  setSiteOptions,
} from '../actions';

describe('Core saga flow', () => {
  let generator;

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
    generator = null;
  });

  it('should call getSiteMetaSaga success', () => {
    generator = getSiteMetaSaga();
    generator.next();

    expect(generator.next({ test: 'getSiteMetaSaga' }).value).toEqual(
      put(setSiteMeta())
    );
    expect(generator.next().done).toBeTruthy();
  });

  it('should call getSiteMetaSaga fail', () => {
    generator = getSiteMetaSaga();
    generator.next();

    expect(generator.next().value).toEqual(put(getSiteMetaFailed()));
    expect(generator.next().done).toBeTruthy();
  });

  it('should call getSiteOptionsSaga success', () => {
    generator = getSiteOptionsSaga();
    generator.next();

    expect(
      generator.next({
        data: {},
      }).value
    ).toEqual(put(setSiteOptions()));
    expect(generator.next().done).toBeTruthy();
  });

  it('should call getSiteOptionsSaga fail', () => {
    generator = getSiteOptionsSaga();
    generator.next();

    expect(generator.next().value).toEqual(put(getSiteOptionsFailed()));
    expect(generator.next().done).toBeTruthy();
  });
});
