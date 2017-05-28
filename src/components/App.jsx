import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import NewsFeeds from './NewsFeeds';

export default class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/newsfeeds" component={NewsFeeds} />
						<Route render={() => <p> Not Found </p>} />
					</Switch>
				</div>
			</Router>
		);
	}
}

