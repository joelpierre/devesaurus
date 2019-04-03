import { combineReducers } from 'redux';
import coreReducer from './core.reducer';
import pageReducer from './page.reducer';
import wordReducer from './word.reducer';

/**
 * Root Reducer
 * @type {Reducer<any>}
 */
const rootReducer = combineReducers({
  core: coreReducer,
  page: pageReducer,
  word: wordReducer,
});

export default rootReducer;
