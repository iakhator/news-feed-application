import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import * as NewsAPI from '../utils/NewsApi';

/**
 * Data store for sources
 * @class NewsStore
 * @extends {EventEmitter}
 */
class NewsStore extends EventEmitter {

  /**
   * Creates an instance of NewsStore.
   * @memberof NewsStore
   * @return {void}
   */
  constructor() {
    super();
    this.newsSources = [];
    this.errorMessage = '';
  }

  /**
   * set newsSources to article.
   * @param {Array} sources: set params to array
   * @return {void} setting source
   * @memberof NewsStore
   */
  setSources(sources) {
    this.newsSources = sources;
    this.emit('change');
  }

  /**
   * Set error message
   * @param {string} message set error message
   * @return {string} error message
   * @memberof NewsStore
   */
  setError(message) {
    this.errorMessage = message;
    this.emit('change');
  }

   /**
   * returns newsSources array.
   * @returns {Array} newsSources sources
   * @memberof NewsStore
  */
  getSources() {
    return this.newsSources;
  }

  /**
   * Get error message
   * @returns {string} error string
   * @memberof NewsStore
   */
  getError() {
    return this.errorMessage;
  }

  getNewsSources() {
    return NewsAPI.getNewsSources();
  }

  /**
   * This method listens for action types then
   * respond accordingly.
   * @param {object} action datatype recieve
   * @returns {Array} action payload
   * @memberof NewsStore
   */
  handleActions(action) {
    switch (action.type) {
      case 'RECIEVE_SOURCES':
        this.setSources(action.sources);
        break;
      case 'RECIEVE_SOURCES_ERROR':
        this.setError(action.message);
        break;
      default:
        return false;
    }
  }
}

const newsStore = new NewsStore();
AppDispatcher.register(newsStore.handleActions.bind(newsStore));
export default newsStore;
