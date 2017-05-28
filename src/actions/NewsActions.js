import AppDispatcher from '../dispatcher/AppDispatcher';
import NewsApi from '../utils/NewsApi';

export default {
	recieveSources: () => {
		NewsApi.getNewsSource('https://newsapi.org/v1/sources?language=en')
			.then(sources => AppDispatcher.dispatch({
				type: "RECIEVE_SOURCES",
				sources
			}))
			.catch(message => AppDispatcher.dispatch({
				type: "RECIEVE_SOURCES_ERROR",
				message
			}));
	},

	getSource: (sourceId) => {
		NewsApi.getNews(`https://newsapi.org/v1/articles?source=${sourceId}&apiKey=213327409d384371851777e7c7f78dfe`)
			.then(singleSource => AppDispatcher.dispatch({
				type: "RECIEVE_SOURCE",
				singleSource
			}))
			.catch(message => AppDispatcher.dispatch({
				type: "RECIEVE_SOOURCE_ERROR",
				message
			}));
	}
};
