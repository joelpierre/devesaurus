import { put } from 'redux-saga/effects';
import axios from 'axios';
import * as coreActions from '../actions/core.actions';

export function* getSiteMetaSaga() {
  try {

    const response = yield axios.get(`${process.env.GATSBY_PROTOCOL}://${process.env.GATSBY_BASE_URL}/wp-json`);

    yield put(coreActions.setSiteMeta(response.data));

  } catch (e) {
    yield put(coreActions.getSiteMetaFailed());
  }
}

export function* getSiteOptionsSaga() {
  try {

    const response = yield axios.get(`${process.env.GATSBY_PROTOCOL}://${process.env.GATSBY_BASE_URL}/wp-json/acf/v2/options`);

    // console.log(response);
    yield put(coreActions.setSiteOptions(response.data.acf));

  } catch (e) {
    yield put(coreActions.getSiteOptionsFailed());
  }
}
