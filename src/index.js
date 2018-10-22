import React from 'react';
import axios from 'axios';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';

// axios.interceptors.request.use((request) => {
// console.log(request);
// Edit Config before you send
// return request;
// }, (error) => {
//   console.log(error);
// return Promise.reject(error);
// });

// axios.interceptors.response.use(request => request, error => Promise.reject(error));

const rootReducer = combineReducers({
//   burger: burgerReducer,
});

const sagaMiddleware = createSagaMiddleware();

// const logger = (store) => next => (action) => {
const logger = () => next => (action) => {
  return next(action);
};

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk, sagaMiddleware, logger),
));

// sagaMiddleware.run(watchAuth);
// sagaMiddleware.run(watchBurger);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
