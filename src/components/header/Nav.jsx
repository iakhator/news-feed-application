import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Nav(props) {
	let { authenticate } = props;
	return (
		<nav className="navbar navbar-fixed-top navbar-default ">
			<div className="container">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar" />
						<span className="icon-bar" />
						<span className="icon-bar" />
					</button>
					<a className="navbar-brand">NewsFlash</a>
				</div>
				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul className="nav navbar-nav">
						{!authenticate ?
							<li>
								<NavLink exact activeClassName="active" to="/">
									Home
							</NavLink>
							</li>
							:
							<li>
								<NavLink activeClassName="active" to="/newsfeeds">
									NewsFeeds
							</NavLink>
							</li>
						}
					</ul>
					<ul className="nav navbar-nav navbar-right">
						{!authenticate ?
							<li>
								<a><button onClick={props.isLogin}className="log-in">LogIn</button></a>
							</li>
							:
							<ul className="nav navbar-nav navbar-right">
								<li>
									<NavLink activeClassName="active" to="/favourite">
										Favourite
									</NavLink>
								</li>
								<li className="dropdown">
									<a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Akhator Itua<span className="caret" /></a>
									<ul className="dropdown-menu">
										<li><button>LogOut</button></li>
									</ul>
								</li>
							</ul>
						}
					</ul>
				</div>
			</div>
		</nav>
	);
}
