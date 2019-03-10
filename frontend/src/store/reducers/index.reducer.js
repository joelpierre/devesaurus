import { combineReducers } from 'redux';
import coreReducer from './core.reducer';
import pageReducer from './page.reducer';

const rootReducer = combineReducers({
  core: coreReducer,
  page: pageReducer,
});

export default rootReducer;
