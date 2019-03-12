import { put } from 'redux-saga/effects';
import axios from 'axios';
import * as pageActions from '../actions/page.actions';

export function* getPageSaga(action) {
  try {
    const response = yield axios.get(`${process.env.GATSBY_PROTOCOL}://${process.env.GATSBY_BASE_URL}/wp-json/better-rest-endpoints/v1/page/${action.data}`);
    yield put(pageActions.setPageData(response.data));
  } catch (error) {
    yield put(pageActions.setPageDataFailed());
  }
}
