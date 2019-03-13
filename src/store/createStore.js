import { createStore as reduxCreateStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index.reducer';
import { watchPage, watchSiteMeta } from './sagas/index.saga';


const createStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = reduxCreateStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk, sagaMiddleware),
    ),
  );

  sagaMiddleware.run(watchPage);
  sagaMiddleware.run(watchSiteMeta);

  return store;
};


export default createStore;
