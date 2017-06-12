import AppDispatcher from '../dispatcher/AppDispatcher';
import NewsApi from '../utils/NewsApi';

class NewsActions {
	recieveSources() {
		NewsApi.getNewsSource('https://newsapi.org/v1/sources?language=en')
			.then(sources => AppDispatcher.dispatch({
				type: "RECIEVE_SOURCES",
				sources
			}))
			.catch(message => AppDispatcher.dispatch({
				type: "RECIEVE_SOURCES_ERROR",
				message
			}));
	}

	getArticle(sourceId, sortBy) {
		NewsApi.getNews(`https://newsapi.org/v1/articles?source=${sourceId}&sortBy=${sortBy}&apiKey=213327409d384371851777e7c7f78dfe`)
			.then(article => AppDispatcher.dispatch({
				type: "RECIEVE_ARTICLE",
				article
			}))
			.catch(message => AppDispatcher.dispatch({
				type: "RECIEVE_ARTICLE_ERROR",
				message
			}));
	}
}

const newsActions = new NewsActions();
export default newsActions;
