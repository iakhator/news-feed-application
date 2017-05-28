import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import NewsFeeds from './NewsFeeds';
import NewsHeadline from './NewsHeadline';

export default class App extends React.Component {
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

