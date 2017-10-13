import * as NewsActions from '../../src/actions/NewsActions';
import AppDispatcher from '../../src/dispatcher/AppDispatcher';

import articles from '../../__mocks__/articlesMock';


describe('News API Actions', () => {
  let spyOnDispatcher;
  beforeEach(() => {
    jest.mock('axios');
    spyOnDispatcher = jest.spyOn(AppDispatcher, 'dispatch');
  });

  afterEach(() => {
    spyOnDispatcher.mockReset();
  });

  describe('#getSources', () => {
    it('should exist', () => {
      expect(NewsActions.getSources).toBeDefined();
    });

    it('should dispatch sources action types when called', () =>
      NewsActions.getSources()
        .then(() => {
          const dispatcherCall = spyOnDispatcher.mock.calls[0][0];
          expect(spyOnDispatcher).toHaveBeenCalled();
          expect(dispatcherCall.type).toEqual('RECIEVE_SOURCES');
          expect(dispatcherCall.sources).toBeInstanceOf(Object);
        }).catch(() => {
          const dispatcherCall = spyOnDispatcher.mock.calls[0][0];
          expect(spyOnDispatcher).toHaveBeenCalled();
          expect(dispatcherCall.type).toEqual('RECIEVE_SOURCES_ERROR');
        })
    );
  });

  describe('#getArticles', () => {
    it('should exist', () => {
      expect(NewsActions.getArticles).toBeDefined();
    });

    it('should dispatch articles action types when called with sourceId and sortBy', () =>
      NewsActions.getArticles('abc-news-au', 'top')
        .then(() => {
          const dispatcherCall = spyOnDispatcher.mock.calls[0][0];
          expect(spyOnDispatcher).toHaveBeenCalled();
          expect(dispatcherCall.type).toEqual('RECIEVE_ARTICLES');
          expect(dispatcherCall.articles).toBeInstanceOf(Object);
        }).catch(() => {
          const dispatcherCall = spyOnDispatcher.mock.calls[0][0];
          expect(spyOnDispatcher).toHaveBeenCalled();
          expect(dispatcherCall.type).toEqual('RECIEVE_ARTICLES_ERROR');
        })
    );
  });
});
