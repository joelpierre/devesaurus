import moxios from 'moxios';
import { getSiteMetaSaga } from './core.saga';
import { put } from 'redux-saga/effects';
import { setSiteMeta } from '../actions';

describe('Core saga flow', () => {
  let generator;
  let request;

  beforeEach(() => {
    generator = getSiteMetaSaga();
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  xit('should call correct action', () => {
    moxios.wait(() => {
      request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response: {
          data: {
            test,
          },
        },
      });
    });

    const expected = put(setSiteMeta({}));
    generator.next();

    console.log(generator);
  });
});
