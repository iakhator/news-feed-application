import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import history from '../history';
import Home from './home/Home';
import NewsFeeds from './NewsFeeds';
import Nav from './header/Nav';
import NewsHeadline from './NewsHeadline';
import { firebaseAuth } from '../config/firebase-config';

function PrivateRoute ({component: Component, isAuthenticated, ...rest}) {
	return (
		<Route
			{...rest}
			render={(props) => isAuthenticated === true
			? <Component {...props} />
			: <Redirect to={{pathname: '/', state: { from: props.location } }} />}
		/>
	)
}

function PublicRoute ({component: Component, isAuthenticated, ...rest }) {
	return (
		<Route
			{...rest}
			render={(props) => isAuthenticated === false
			? <Component {...props} />
			: <Redirect to='/newsfeeds' />}
		/>
	)
}

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isAuthenticated: true,
			displayName: ''
		}
	}

	componentDidMount() {
		firebaseAuth.onAuthStateChanged(user => {
			if (user) {
				this.setState({
					isAuthenticated: true,
					displayName: user.displayName
				});
			}else {
				this.setState({
					isAuthenticated: false
				});
			}
		})
	}

	render() {
		return (
			<Router history={history}>
				<div>
					<Nav
						authenticate={this.state.isAuthenticated}
						displayName={this.state.displayName}
					/>
					<Switch>
						<PublicRoute isAuthenticated={this.state.isAuthenticated}  exact path="/" component={Home} />
						<PrivateRoute isAuthenticated={this.state.isAuthenticated}  exact path="/newsfeeds" component={NewsFeeds} />
						<PrivateRoute isAuthenticated={this.state.isAuthenticated} exact path="/newsfeeds/:sourceId/:sortBy" component={NewsHeadline} />
						<Route render={() => <p className="not-found">404 Not Found </p>} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;

