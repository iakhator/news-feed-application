import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from './home/Home';
import NewsFeeds from './NewsFeeds';
import Nav from './header/Nav';
import NewsHeadline from './NewsHeadline';
import AuthStore from '../stores/AuthStore';
import AuthActions from '../actions/AuthActions';
import Auth from '../helpers/auth';
import { firebaseAuth } from '../config/firebase-config';

function PrivateRoute ({component: Component, isAuthenticated, ...rest}) {
	return (
		<Route
			{...rest}
			render={(props) => isAuthenticated === true
			? <Component {...props} />
			: <Redirect to={{pathname: '/', state: {from: props.location}}} />}
		/>
	)
}

function PublicRoute ({component: Component, isAuthenticated, ...rest}) {
	return (
		<Route
			{...rest}
			render={(props) => isAuthenticated === false
			? <Component {...props} />
			: <Redirect to='/newsfeeds' />}
		/>
	)
}

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isAuthenticated: AuthStore.isAuthenticated()
		}
		this.logIn = this.logIn.bind(this)
	}

	componentDidMount() {
		firebaseAuth.onAuthStateChanged(user => {
			if (user) {
				window.localStorage.setItem('user', user.displayName);
				window.localStorage.setItem('userId', user.uid);
				this.setState({
					isAuthenticated: true
				});
			}else {
				window.localStorage.removeItem('user');
				window.localStorage.removeItem('userId');
				this.setState({
					isAuthenticated: false
				});
			}
		})
	}

	logIn() {
		Auth.logIn().then(result => {
			AuthActions.logIn(result.user.displayName, result.user.uid);
			this.setState({
				isAuthenticated: true
			})
		});
	}

	render() {
		return (
			<Router>
				<div>
					<Nav authenticate={this.state.isAuthenticated} isLogin={this.logIn} />
					<Switch>
						<PublicRoute isAuthenticated={this.state.isAuthenticated}  exact path="/" component={Home} />
						<PrivateRoute isAuthenticated={this.state.isAuthenticated}  exact path="/newsfeeds" component={NewsFeeds} />
						<PrivateRoute isAuthenticated={this.state.isAuthenticated} path="/newsfeeds/:sourceId" component={NewsHeadline} />
						<Route render={() => <p> Not Found </p>} />
					</Switch>
				</div>
			</Router>
		);
	}
}

