import React from 'react';
import Auth from '../../helpers/auth';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isAuthenticated: false,
			user : ''
		};
		this.login = this.login.bind(this);
	}

	login() {
		Auth.logIn().then((user) => {
			this.setState({
				isAuthenticated: true,
				user: user
			});
		});
	}

	render() {
		return (
			<div className="home-page">
				<div className="col-md-8 col-md-offset-2">
					<div className="jumbotron">
						<h2>
							<i className="fa fa-rss rss" aria-hidden="true" />
							<div>News Flash </div>
						</h2>
						<p>News Flash, Get the latest news around the globe here</p>
						<div>
							<button onClick={this.login} className="login"><i className="fa fa-google-plus" aria-hidden="true" /> Login With Google</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;