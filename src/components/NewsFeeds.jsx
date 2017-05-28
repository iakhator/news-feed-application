import React from 'react';
import PropTypes from 'prop-types';
import Nav from './header/Nav';
import NewsActions from '../actions/NewsActions';
import NewsStore from '../stores/NewsStore';

export default class News extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newsSource: NewsStore.getSources()
		};
		this.recieveSources = this.recieveSources.bind(this);
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

	render() {
		return (
			<div>
				<Nav />
				<div className="container">
					<p>Welcome to my app</p>
					<ul className="newsfeed">
						{this.state.newsSource.map(sources => (
							<li key={sources.id}>{sources.name}</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}
News.PropTypes = {
	name: PropTypes.string.isRequired
};

