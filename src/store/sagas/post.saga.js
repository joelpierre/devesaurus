import { put } from 'redux-saga/effects';
import axios from 'axios';
import { getPostDataFailed, setPostData } from '../actions';

/**
 * Generator function to get single page
 * @param action
 * @returns {IterableIterator<PutEffect<{data, type}>|AxiosPromise<any>|PutEffect<{type}>>}
 */
export function* getPostSaga(action) {
  try {
    const response = yield axios.get(`${process.env.GATSBY_PROTOCOL}://${process.env.GATSBY_BASE_URL}/wp-json/better-rest-endpoints/v1/post/${action.data}`);
    console.log(response.data);
    yield put(setPostData(response.data));
  } catch (error) {
    yield put(getPostDataFailed());
  }
}
