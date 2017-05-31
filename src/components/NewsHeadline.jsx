import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Nav from './header/Nav';
import NewsActions from '../actions/NewsActions';
import NewsStore from '../stores/NewsStore';

function Headline(props) {
	let newsSource = props.newsSource;
	return (
		<div>
			{newsSource.map((article) => {
				return (
					<div className="single" key={article.title}>
						<h3 className="page-header">
							<Link to={article.url} target="_blank">
								{article.title}
							</Link>
						</h3>
						<img className="img-responsive page-header" src={article.urlToImage} alt="" />
						<div>
							<p className="description">
								<i className="fa fa-newspaper-o " aria-hidden="true" /> {article.description}...
								<Link className="see-more" to={article.url} target="_blank"> See more</Link>
							</p>
							<div className="article-details">
								<p className="pull-right">
									<i className="fa fa-clock-o" aria-hidden="true" />
									{article.publishedAt}
								</p>
								<p className="pull-left">
									<i className="fa fa-user" aria-hidden="true" /> {article.author}
								</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

Headline.PropTypes = {
	newsSource: PropTypes.array.isRequired
}

export default class NewsHeadline extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newsSource: null
		};
		this.recieveSource = this.recieveSource.bind(this);
	}

	componentDidMount() {
		NewsActions.getSource(this.props.match.params.sourceId);
		this.onRecieveChange();
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			newsSource: NewsActions.getContact(nextProps.match.params.sourceId)
		});
	}

	componentWillUnmount() {
		NewsStore.removeListener("change", this.recieveSource)
	}

	onRecieveChange() {
		NewsStore.on("change", this.recieveSource)
	}

	recieveSource() {
		this.setState({
			newsSource: NewsStore.getSource(this.props.match.params.sourceId)
		})
	}

	render() {
		return (
			<div>
				<Nav />
				<div className="container">
					<div className="row ">
						<div className="col-md-10 col-md-offset-1">
							<div className="single-source">
								{!this.state.newsSource ? <p className="load ">Loading...</p> : <Headline newsSource={this.state.newsSource} />}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}