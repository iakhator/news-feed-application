import AppDispatcher from '../dispatcher/AppDispatcher';
import * as NewsApi from '../utils/NewsApi';

/**
 * Dispatches the sources received from the api request
 * @export recieveSources
 * @returns {Array} returns array of news sources
 */
export function recieveSources() {
  return NewsApi.getNewsSource('https://newsapi.org/v1/sources?language=en')
    .then(sources => AppDispatcher.dispatch({
      type: 'RECIEVE_SOURCES',
      sources
    }))
    .catch(message => AppDispatcher.dispatch({
      type: 'RECIEVE_SOURCES_ERROR',
      message
    }));
}

/**
 * Dispatches the articles received from the api request.
 * @param {string} sourceId
 * @param {string} sortBy
 * @export getArticle
 * @returns {Array} return array of news article
 */
export function getArticle(sourceId, sortBy) {
  return NewsApi.getNews(
    `https://newsapi.org/v1/articles?source=${sourceId}` +
    `&sortBy=${sortBy}&apiKey=213327409d384371851777e7c7f78dfe`)
    .then(article => AppDispatcher.dispatch({
      type: 'RECIEVE_ARTICLE',
      article
    }))
    .catch(message => AppDispatcher.dispatch({
      type: 'RECIEVE_ARTICLE_ERROR',
      message
    }));
}

