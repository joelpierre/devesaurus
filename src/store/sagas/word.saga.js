import { put } from 'redux-saga/effects';
import axios from 'axios';
import { getWordDataFailed, setWordData } from '../actions';

/**
 * Generator function to get single page
 * @param action
 * @returns {IterableIterator<PutEffect<{data, type}>|AxiosPromise<any>|PutEffect<{type}>>}
 */
export function* getWordSaga(action) {
  try {
    const response = yield axios.get(
      `${process.env.GATSBY_PROTOCOL}://${
        process.env.GATSBY_BASE_URL
      }/wp-json/better-rest-endpoints/v1/word/${action.data}`
    );
    yield put(setWordData(response.data));
  } catch (error) {
    yield put(getWordDataFailed());
  }
}
