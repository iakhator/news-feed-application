import AppDispatcher from '../dispatcher/AppDispatcher';
import * as NewsApi from '../utils/NewsApi';

/**
 * Dispatches the sources received from the api request
 * @export recieveSources
 * @returns {Array} returns array of news sources
 */
export function getSources() {
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
export function getArticles(sourceId, sortBy) {
  return NewsApi.getNews(
    `https://newsapi.org/v1/articles?source=${sourceId}` +
    `&sortBy=${sortBy}&apiKey=${process.env.NEWS_API_KEY}`)
    .then(articles => AppDispatcher.dispatch({
      type: 'RECIEVE_ARTICLES',
      articles
    }))
    .catch(message => AppDispatcher.dispatch({
      type: 'RECIEVE_ARTICLES_ERROR',
      message
    }));
}

