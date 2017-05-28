import AppDispatcher from '../dispatcher/AppDispatcher';
import NewsApi from '../utils/NewsApi';

export default {
	recieveSources: () => {
		NewsApi.getNewsSource('https://newsapi.org/v1/sources')
			.then(sources => AppDispatcher.dispatch({
				type: "RECIEVE_SOURCES",
				sources
			}))
			.catch(message => AppDispatcher.dispatch({
				type: "RECIEVE_ERRORS",
				message
			}));
	}
};
