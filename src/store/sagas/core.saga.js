import { put } from 'redux-saga/effects';
import axios from 'axios';

import {
  getSiteMetaFailed,
  getSiteOptionsFailed,
  setSiteMeta,
  setSiteOptions,
} from '../actions';

/**
 * Generator function for getting the site meta data
 * @returns {IterableIterator<PutEffect<{data, type}>|AxiosPromise<any>|PutEffect<{type}>>}
 */
export function* getSiteMetaSaga() {
  try {
    const response = yield axios.get(
      `${process.env.GATSBY_PROTOCOL}://${process.env.GATSBY_BASE_URL}/wp-json`
    );

    console.log(response);

    yield put(setSiteMeta(response.data));
  } catch (e) {
    yield put(getSiteMetaFailed());
  }
}

/**
 * Generator function for getting the site options
 * @returns {IterableIterator<PutEffect<{data, type}>|AxiosPromise<any>|PutEffect<{type}>>}
 */
export function* getSiteOptionsSaga() {
  try {
    const response = yield axios.get(
      `${process.env.GATSBY_PROTOCOL}://${
        process.env.GATSBY_BASE_URL
      }/wp-json/acf/v2/options`
    );
    yield put(setSiteOptions(response.data.acf));
  } catch (e) {
    yield put(getSiteOptionsFailed());
  }
}
