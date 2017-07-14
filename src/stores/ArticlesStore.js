import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';

/**
 * Data store for Article
 * @class ArticlesStore
 * @extends {EventEmitter}
 */
class ArticlesStore extends EventEmitter {

  /**
   * Creates an instance of ArticlesStore.
   * @memberof ArticlesStore
   * @return {void}
   */
  constructor() {
    super();
    this.newsArticles = [];
    this.errorMessage = '';
  }

  /**
   * set newsArticle to article.
   * @param {Array} articles: passing a param of articles
   * @memberof ArticlesStore
   * @return {void}
   */
  setArticle(articles) {
    this.newsArticles = articles;
    this.emit('change');
  }

  /**
   * returns newsArticle array.
   * @returns {Array} articles.
   * @memberof ArticlesStore
  */
  getArticles() {
    return this.newsArticles;
  }

  /**
   * Set error message
   * @param {string} message: error message
   * @memberof ArticlesStore
   * @return {void}
   */
  setError(message) {
    this.errorMessage = message;
    this.emit('change');
  }

  /**
   * Get error message
   * @returns {string} message
   * @memberof ArticlesStore
   */
  getError() {
    return this.errorMessage;
  }

  /**
   * This method listens for action types then
   * respond accordingly.
   * @param {object} action: datatype
   * @returns {Array} payload
   * @memberof ArticlesStore
   */
  handleActions(action) {
    switch (action.type) {
      case 'RECIEVE_ARTICLES':
        this.setArticle(action.articles);
        break;
      case 'RECIEVE_ARTICLES_ERROR':
        this.setError(action.message);
        break;
      default:
        return action;
    }
  }
}

const articlesStore = new ArticlesStore();
AppDispatcher.register(articlesStore.handleActions.bind(articlesStore));
export default articlesStore;
