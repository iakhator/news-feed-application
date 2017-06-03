import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import NewsActions from '../actions/NewsActions';
import NewsStore from '../stores/NewsStore';
import AuthStore from '../stores/AuthStore';
import AuthActions from '../actions/AuthActions';
import Auth from '../helpers/auth'

function Source(props) {
	let search = props.search;
	let newsSource = props.newsSource;
	return (
		<div>
			<ul className="newsfeed">
				{newsSource.
					filter(
					(sources) => {
						return sources.name.toLowerCase().indexOf(search.toLowerCase()) >= 0;
					}).map(sources => (
						<li key={sources.id}><Link to={`/newsfeeds/${sources.id}`}>{sources.name}</Link></li>
				))}
			</ul>
		</div>
	);
}

Source.PropTypes = {
	newsSource: PropTypes.array.isRequired,
	search: PropTypes.string.isRequired
}

export default class News extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newsSource: NewsStore.getSources(),
			search: '',
			isAuthenticated: AuthStore.isAuthenticated()
		};
		this.recieveSources = this.recieveSources.bind(this);
		this.onSearch = this.onSearch.bind(this);
		this.logOut = this.logOut.bind(this);
	}

	componentDidMount() {
		NewsActions.recieveSources();
		this.onRecieveChange();
		if (this.state.isAuthenticated) {
			console.log(window.localStorage.getItem('userId'))
		}
	}

	componentWillUnmount() {
		NewsStore.removeListener("change", this.recieveSources)
	}

	onRecieveChange() {
		NewsStore.on("change", this.recieveSources)
	}

	onSearch(e) {
		this.setState({
			search: e.target.value
		})
	}

	recieveSources() {
		this.setState({
			newsSource: NewsStore.getSources()
		})
	}

	logOut() {
		if (this.state.isAuthenticated) {
			Auth.logOut();
			AuthActions.logOut();
			this.setState({
				isAuthenticated: false
			})
		}
	}

	render() {
		return (
			<div>
				<div className="container contain">
					<div className="row">
						<div className="col-md-10 col-md-offset-1">
							<p className="para text-center "><i className="fa fa-newspaper-o fa-2x" aria-hidden="true" /> <span>Welcome to NewsFlash</span></p>
							<div className="page-header">
								<input
									className="form-control"
									placeholder="Search for your favourite headlines on the go..."
									type="text"
									value={this.state.search}
									onChange={this.onSearch}
								/>
								<button onClick={this.logOut}>logout</button>
							</div>
							<Source newsSource={this.state.newsSource} search={this.state.search} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}


