import React from 'react';
import Nav from './header/Nav';
import NewsActions from '../actions/NewsActions';
import NewsStore from '../stores/NewsStore';

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
					{!this.state.newsSource ? <p>Loading</p> : <div>{this.state.newsSource.map((article) => {
						return (
							<div key={article.title}><img src={article.urlToImage} alt="" /><h1>{article.title}</h1></div>
						)
					})} </div>}

				</div>
			</div>
		);
	}
}