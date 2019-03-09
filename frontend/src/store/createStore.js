import { createStore as reduxCreateStore } from 'redux';
import rootReducer from './reducers/index';

const reduxPlugin = process.env.GATSBY_DEV_MODE ? window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__() : null;

const createStore = () => {
  const store = reduxCreateStore(
    rootReducer,
    reduxPlugin,
  );
  return store;
};

export default createStore;
