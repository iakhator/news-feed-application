import ArticlesStore from '../../src/stores/ArticlesStore';
import AppDispatcher from '../../src/dispatcher/AppDispatcher';

import articlesAction from '../../__mocks__/articlesStoreMock';

jest.mock('../../src/dispatcher/AppDispatcher');
const mockDispatcher = AppDispatcher.register.mock.calls[0][0];

describe('ArticlesStore', () => {
  it('initialize articles', () => {
    expect(ArticlesStore.getArticles()).toEqual([]);
  });

  it('should register a callback with the dispatcherxist', () => {
    expect(mockDispatcher.length).toBe(1);
  });

  describe('#getArticles', () => {
    it('should get the article author', () => {
      mockDispatcher(articlesAction);
      const result = (ArticlesStore.getArticles());
      expect(result[0].author).toBe('TNW Deals');
      expect(result[1].author).toBe('Rachel Kaser');
    });

    it('should get the article title', () => {
      mockDispatcher(articlesAction);
      const result = (ArticlesStore.getArticles());
      expect(result[0].title).toBe('Build electronics projects');
      expect(result[1].title)
      .toBe('Facebook brings out a new ‘Order Food’ option');
    });

    it('should get the article description', () => {
      mockDispatcher(articlesAction);
      const result = (ArticlesStore.getArticles());
      expect(result[0].description).toBe('Understanding electronics');
      expect(result[1].description)
      .toBe('Facebook is rolling out a new food ordering option');
    });
  });
});
