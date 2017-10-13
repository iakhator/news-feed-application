import NewsStore from '../../src/stores/NewsStore';
import AppDispatcher from '../../src/dispatcher/AppDispatcher';

import sourcesAction from '../../__mocks__/newsStoreMock';

jest.mock('../../src/dispatcher/AppDispatcher');
const mockDispatcher = AppDispatcher.register.mock.calls[0][0];


describe('NewsStore', () => {
  it('should check for a dispatcheru', () => {
    expect(mockDispatcher.length).toBe(1);
  });

  it('should set getSources value', () => {
    expect(NewsStore.getSources()).toEqual([]);
  });

  describe('#getSources', () => {
    it('should get the source id', () => {
      mockDispatcher(sourcesAction);
      const result = (NewsStore.getSources());
      expect(result[0].id).toBe('al-jazeera-english');
      expect(result[1].id).toBe('ars-technica');
    });

    it('should get the source name', () => {
      mockDispatcher(sourcesAction);
      const result = (NewsStore.getSources());
      expect(result[0].name).toBe('Al Jazeera English');
      expect(result[1].name).toBe('Ars Technica');
    });

    it('should get the source description', () => {
      mockDispatcher(sourcesAction);
      const result = (NewsStore.getSources());
      expect(result[0].description)
      .toBe('News, analysis from the Middle East and worldwide.');
      expect(result[1].description).toBe("The PC enthusiast's resource.");
    });
  });
});
