import { createStore as reduxCreateStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index';
import {
  watchPage,
  watchPost,
  watchSiteMeta,
  watchTeam,
  watchWord,
} from './sagas';

export const sagaMiddleware = createSagaMiddleware();

/**
 * Configure Store for Application
 * @returns {any}
 */
/* istanbul ignore next */
const configureStore = () => {
  const store = reduxCreateStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(watchPage);
  sagaMiddleware.run(watchPost);
  sagaMiddleware.run(watchWord);
  sagaMiddleware.run(watchTeam);
  sagaMiddleware.run(watchSiteMeta);

  return store;
};

export default configureStore;
