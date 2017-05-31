import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import Nav from './header/Nav';
import NewsActions from '../actions/NewsActions';
import NewsStore from '../stores/NewsStore';

function Source(props) {
	let newsSource = props.newsSource;
	return (
		<div>
			<ul className="newsfeed">
				{newsSource.map(sources => (
					<li key={sources.id}><Link to={`/newsfeeds/${sources.id}`}>{sources.name}</Link></li>
				))}
			</ul>
		</div>
	);
}

Source.PropTypes = {
	newsSource: PropTypes.array.isRequired
}

export default class News extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newsSource: NewsStore.getSources(),
			search: ''
		};
		this.recieveSources = this.recieveSources.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}

	componentDidMount() {
		NewsActions.recieveSources();
		this.onRecieveChange();
	}

	componentWillUnmount() {
		NewsStore.removeListener("change", this.recieveSources)
	}

	onRecieveChange() {
		NewsStore.on("change", this.recieveSources)
	}

	recieveSources() {
		this.setState({
			newsSource: NewsStore.getSources()
		})
	}

	handleSearch(event) {
		console.log(event.target.value)
	}

	render() {
		return (
			<div>
				<Nav />
				<div className="container">
					<p>Welcome to my app</p>
					<input type="text" value={this.state.search} onChange={this.handleSearch} />
					<Source newsSource={this.state.newsSource} />
				</div>
			</div>
		);
	}
}
News.PropTypes = {
	name: PropTypes.string.isRequired
};

