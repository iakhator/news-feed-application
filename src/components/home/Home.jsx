import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from '../../helpers/auth';
import AuthActions from '../../actions/AuthActions';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isAuthenticated: false
		}
		this.login = this.login.bind(this);
	}

	login() {
		Auth.logIn().then(result => {
			AuthActions.logIn(result.user.displayName, result.user.uid);
			this.setState({
				isAuthenticated: true
			})
		});
	}

	render() {
		return (
			<div className="home-page">
				{this.state.isAuthenticated ? <Redirect to='/newsfeeds' /> : <div className="home-page">
					<div className="col-md-8 col-md-offset-2">
						<div className="jumbotron">
							<h2>
								<i className="fa fa-rss rss" aria-hidden="true" />
								<div>News Flash</div>
							</h2>
							<p>News Flash, Get the latest news around the globe here</p>
							<div>
								<button onClick={this.login} className="login"><i className="fa fa-google-plus" aria-hidden="true" /> Login With Google</button>
							</div>
						</div>
					</div>
				</div>
			}
			</div>
		);
	}
}
