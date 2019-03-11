import React from 'react';
import { Provider } from 'react-redux';
import createStore from '../store/createStore';


export default ({ element }) => {
  if (typeof window !== 'undefined') {
    const store = createStore();
    return (
      <Provider store={store}>{element}</Provider>
    );
  }

  return (
    { element }
  );
};
