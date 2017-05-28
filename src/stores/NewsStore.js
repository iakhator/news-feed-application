import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';

class NewsStore extends EventEmitter {
	constructor(props) {
		super(props);
		this.newsSources = [];
	}

	setSources(sources) {
		this.newsSources = sources;
		this.emit('change');
	}

	getSources() {
		return this.newsSources;
	}

	handleActions(action) {
		switch (action.type) {
			case "RECIEVE_SOURCES":
				this.setSources(action.sources);
				break;
		}
	}
}

const newsStore = new NewsStore();
AppDispatcher.register(newsStore.handleActions.bind(newsStore));
export default newsStore;
