import axios from 'axios';

class NewsApi {
	getNewsSource(url) {
		return axios.get(url)
		.then(source => source.data.sources)
	}

	getNews(url) {
		return axios.get(url)
		.then(source => source.data.articles)
	}
}

const newsApi = new NewsApi();
export default newsApi;
