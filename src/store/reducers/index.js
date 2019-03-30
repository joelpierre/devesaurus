import { combineReducers } from 'redux';
import coreReducer from './core.reducer';
import pageReducer from './page.reducer';

/**
 * Root Reducer
 * @type {Reducer<any>}
 */
const rootReducer = combineReducers({
  core: coreReducer,
  page: pageReducer,
});

export default rootReducer;
