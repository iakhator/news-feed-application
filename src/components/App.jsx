import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import NewsFeeds from './NewsFeeds';
import NewsHeadline from './NewsHeadline';
import AuthStore from '../stores/AuthStore';

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isAuthenticated: AuthStore.isAuthenticated()
		}
	}
	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/newsfeeds" component={NewsFeeds} />
						<Route path="/newsfeeds/:sourceId" component={NewsHeadline} />
						<Route render={() => <p> Not Found </p>} />
					</Switch>
				</div>
			</Router>
		);
	}
}

