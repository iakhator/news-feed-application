import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NewsActions from '../actions/NewsActions';
import ArtclesStore from '../stores/ArticlesStore';

function Headline(props) {
	const {newsArticle} = props;
	return (
		<div>
			{newsArticle.map((article) => {
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
	newsArticle: PropTypes.array.isRequired
}

export default class NewsHeadline extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newsArticle: null
		};
		this.recieveSource = this.recieveSource.bind(this);
	}

	componentDidMount() {
		NewsActions.getArticle(this.props.match.params.sourceId, this.props.match.params.sortBy);
		this.onRecieveChange();
	}

	componentWillUnmount() {
		ArtclesStore.removeListener("change", this.recieveSource)
	}

	onRecieveChange() {
		ArtclesStore.on("change", this.recieveSource)
	}

	recieveSource() {
		this.setState({
			newsArticle: ArtclesStore.getArticle()
		})
	}

	render() {
		return (
			<div>
				<div className="container">
					<div className="row ">
						<div className="col-md-10 col-md-offset-1">
							<div className="single-source">
								{!this.state.newsArticle ? <p className="load ">Loading...</p> : <Headline newsArticle={this.state.newsArticle} />}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}