import { combineReducers } from 'redux';
import coreReducer from './core.reducer';
import pageReducer from './page.reducer';
import wordReducer from './word.reducer';
import postReducer from './post.reducer';

/**
 * Root Reducer
 * @type {Reducer<any>}
 */
const rootReducer = combineReducers({
  core: coreReducer,
  page: pageReducer,
  word: wordReducer,
  post: postReducer,
});

export default rootReducer;
