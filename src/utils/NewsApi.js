import axios from 'axios';

export default {
	getNewsSource: url => axios.get(url)
		.then(source => source.data.sources)
};
