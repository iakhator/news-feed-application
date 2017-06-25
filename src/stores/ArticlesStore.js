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
    this.newsArticle = [];
  }

  /**
   * set newsArticle to article.
   * @param {Array} article
   * @memberof ArticlesStore
   */
  setArticle(article) {
    this.newsArticle = article;
    this.emit('change');
  }

  /**
   * returns newsArticle array.
   * @returns {Array}
   * @memberof ArticlesStore
  */
  getArticle() {
    return this.newsArticle;
  }

  /**
   * This method listens for action types then
   * respond accordingly.
   * @param {object} action
   * @returns {Array}
   * @memberof ArticlesStore
   */
  handleActions(action) {
    switch (action.type) {
    case 'RECIEVE_ARTICLE':
      this.setArticle(action.article);
      break;
    default:
      return false;
    }
  }
}

const articlesStore = new ArticlesStore();
AppDispatcher.register(articlesStore.handleActions.bind(articlesStore));
export default articlesStore;
