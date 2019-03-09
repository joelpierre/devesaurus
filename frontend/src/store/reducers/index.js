import { combineReducers } from 'redux-immutable';
import siteMetaReducer from './siteMeta.reducer';

const rootReducer = combineReducers({
  siteMeta: siteMetaReducer
});

export default rootReducer;
