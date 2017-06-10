import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';

class ArticlesStore extends EventEmitter {
	constructor(props) {
		super(props);
		this.newsArticle = [];
	}

	setArticle(singleSource) {
		this.newsArticle = singleSource;
		this.emit('change');
	}

	getArticle() {
		return this.newsArticle;
	}

	handleActions(action) {
		switch (action.type) {
			case "RECIEVE_ARTICLE":
				this.setArticle(action.singleSource);
				break;
		}
	}
}

const articlesStore = new ArticlesStore();
AppDispatcher.register(articlesStore.handleActions.bind(articlesStore));
export default articlesStore;
