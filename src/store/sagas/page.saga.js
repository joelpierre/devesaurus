import { delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import axios from 'axios';
import * as pageActions from '../actions/page.actions';

export function* getPageSaga(action) {
  try {
    const response = yield axios.get(`${process.env.GATSBY_PROTOCOL}://${process.env.GATSBY_BASE_URL}/wp-json/wp/v2/pages?slug=${action.data}`);
    yield put(pageActions.setPageData(response.data[0]));
    console.log();
  } catch (error) {
    yield put(pageActions.setPageDataFailed());
  }
}
