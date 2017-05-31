import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from '../../helpers/auth';
import HomeNav from './HomeNav';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false
		}
		this.login = this.login.bind(this);
	}

	login() {
		Auth.login().then(() => {
			this.setState({
				loggedIn: true
			})
		});
	}

	render() {
		return (
			<div>
				{this.state.loggedIn ? <Redirect to='/newsfeeds' /> : <div className="home-page">
					<HomeNav />
					<div className="col-md-8 col-md-offset-2">
						<div className="jumbotron">
							<h1>
								<i className="fa fa-rss rss" aria-hidden="true" />
								<div>News Feed</div>
							</h1>
							<p>News Flash, Get the latest news around the globe here</p>
							<div>
								<button onClick={this.login} className="login">Login With Google</button>
							</div>
						</div>
					</div>
				</div>
			}
			</div>
		);
	}
}
