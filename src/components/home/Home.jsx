import React from 'react';
import GoogleLogin from '../auth/GoogleLogin';
import HomeNav from './HomeNav';

export default class Home extends React.Component {
	render() {
		return (
			<div className="home-page">
				<HomeNav />
				<div className="col-md-8 col-md-offset-2">
					<div className="jumbotron">
						<h1>
							<i className="fa fa-rss rss" aria-hidden="true"></i>  
							<div>News Feed</div>
						</h1>	
						<p>News Flash, Get the latest news around the globe here</p>
						<GoogleLogin />
					</div>
				</div>
			</div>
		);
	}
}
