import React from 'react';
import NewsActions from '../actions/NewsActions';
import ArtclesStore from '../stores/ArticlesStore';
import Headline from './Headline';

class NewsHeadline extends React.Component {
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
								{!this.state.newsArticle ?
									<p className="load ">Loading...</p> :
									<Headline
										newsArticle={this.state.newsArticle}
									/>
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default NewsHeadline;