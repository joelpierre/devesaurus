import { createStore as reduxCreateStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index';
import {
  watchPage, watchPost, watchSiteMeta, watchWord,
} from './sagas';

const sagaMiddleware = createSagaMiddleware();

/**
 * Configure Store for Application
 * @returns {any}
 */
const configureStore = () => {
  const store = reduxCreateStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware),
    ),
  );

  sagaMiddleware.run(watchPage);
  sagaMiddleware.run(watchPost);
  sagaMiddleware.run(watchWord);
  sagaMiddleware.run(watchSiteMeta);

  return store;
};


export default configureStore;
