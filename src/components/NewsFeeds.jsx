import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import NewsActions from '../actions/NewsActions';
import NewsStore from '../stores/NewsStore';
import AuthStore from '../stores/AuthStore';

/**
 *
 * @param {*} props
 */
function Source(props) {
	let search = props.search;
	let newsSource = props.newsSource;
	return (
		<div className="row">
			<div className="col-md-10 col-md-offset-1">
				<div className="newsfeed">
					{newsSource.
						filter(
						(sources) => {
							return sources.name.toLowerCase().indexOf(search.toLowerCase()) >= 0;
						}).map(sources => (
							<div className="news-sources" key={sources.id}>
								<h3 className="page-header">{sources.name}</h3>
								<ul className="desc">
									<li>
										<i className="fa fa-star" aria-hidden="true" />
										{sources.description}
									</li>
								</ul>
								{sources.sortBysAvailable.map((sortBy) => {
									return(
										<div key={sortBy}>
											<ul className="sort pull-right">
												<li>
													<Link to={`/newsfeeds/${sources.id}/${sortBy}`}>{sortBy}</Link>
												</li>
											</ul>
										</div>
									)
								})}
							</div>
					))}
				</div>
			</div>
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

	render() {
		return (
			<div className="body">
				<div className="container contain">
					<div className="row">
						<div className="col-md-10 col-md-offset-1">
							<p className="para text-center "><i className="fa fa-newspaper-o fa-2x" aria-hidden="true" /> <span>Welcome to NewsFlash</span></p>
							<div className="page-header col-md-10 col-md-offset-1">
								<input
									className="form-control"
									placeholder="Search for your favourite headlines on the go..."
									type="text"
									value={this.state.search}
									onChange={this.onSearch}
								/>
							</div>
							<div>
								{!this.state.newsSource ? <p className="load">Loading...</p>
								:<Source
									newsSource={this.state.newsSource}
									search={this.state.search}
								/>}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}


