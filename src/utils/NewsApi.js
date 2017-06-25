import axios from 'axios';

/**
 * Get the sources from the endpoint
 * passed and return the sources values.
 * @param {string} url the sources endpoint.
 * @returns {Promise} the sources of newsapi.
 */
export const getNewsSource = (url) => {
  return axios.get(url)
  .then(source => source.data.sources);
};

/**
 * Recieves a url as parameter and return
 * the value gotten from the url params.
 * @static
 * @param {string} url articles endpoint.
 * @returns  {Promise} the articles of newsapi
 */
export const getNews = (url) => {
  return axios.get(url)
  .then(source => source.data.articles);
};
