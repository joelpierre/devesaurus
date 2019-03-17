import configureStore from 'redux-mock-store';

export const MockMiddleware = [];

export const MockState = {
  core: {
    options: {
      company_name: 'Testing',
      company_slogan: 'Testing Slogan',
    },
  },
};

export const MockStoreSteup = configureStore(MockMiddleware);

export const MockStore = MockStoreSteup(MockState);
