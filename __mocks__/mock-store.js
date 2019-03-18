import configureStore from 'redux-mock-store';

export const MockMiddleware = [];

export const MockState = {
  core: {
    title: 'MockStore Test Title',
    description: 'MockStore Test Description',
    loading: false,
    error: false,
    api: 'api.test',
    site: 'site.test',
    options: {
      company_name: 'MockStore Testing',
      company_slogan: 'MockStore Testing Slogan',
    },
  },
};

export const MockStoreSteup = configureStore(MockMiddleware);

export const MockStore = MockStoreSteup(MockState);
