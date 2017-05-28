import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';

class NewsStore extends EventEmitter {
	constructor(props) {
		super(props);
		this.newsSources = [];
		this.newsSource = [];
	}

	setSources(sources) {
		this.newsSources = sources;
		this.emit('change');
	}

	setSource(singleSource) {
		this.newsSource = singleSource;
		this.emit('change');
	}

	getSources() {
		return this.newsSources;
	}

	getSource() {
		return this.newsSource;
	}

	handleActions(action) {
		switch (action.type) {
			case "RECIEVE_SOURCES":
				this.setSources(action.sources);
				break;
			case "RECIEVE_SOURCE":
				this.setSource(action.singleSource);
				break;
		}
	}
}

const newsStore = new NewsStore();
AppDispatcher.register(newsStore.handleActions.bind(newsStore));
export default newsStore;
