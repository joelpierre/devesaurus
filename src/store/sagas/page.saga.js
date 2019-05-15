import { put } from 'redux-saga/effects';
import axios from 'axios';
import { getPageDataFailed, setPageData } from '../actions';

/**
 * Generator function to get single page
 * @param action
 * @returns {IterableIterator<PutEffect<{data, type}>|AxiosPromise<any>|PutEffect<{type}>>}
 */
export function* getPageSaga(action) {
  try {
    const response = yield axios.get(
      `${process.env.GATSBY_PROTOCOL}://${
        process.env.GATSBY_BASE_URL
      }/wp-json/better-rest-endpoints/v1/page/${action.data}`
    );
    // console.log(response.data);
    yield put(setPageData(response.data));
  } catch (error) {
    yield put(getPageDataFailed());
  }
}
