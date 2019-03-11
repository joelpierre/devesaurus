import { createStore as reduxCreateStore, applyMiddleware, compose } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index.reducer';
import { watchPage } from './sagas/index.saga';


const createStore = () => {
  const composeEnhancers = process.env.GATSBY_DEV_MODE ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

  const sagaMiddleware = createSagaMiddleware();

  const store = reduxCreateStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(thunk, sagaMiddleware),
    ),
  );

  sagaMiddleware.run(watchPage);

  return store;
};


export default createStore;
