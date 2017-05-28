import axios from 'axios';

export default {
	getNewsSource: url => axios.get(url)
		.then(source => source.data.sources),

	getNews: url => axios.get(url)
		.then(source => source.data.articles)
};
