import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Auth from '../../helpers/auth';


/**
 * The Nav class displays the navigation in
 * all components
 * @class Nav
 */
class Nav extends React.Component {

  /**
   * Initalizes states and binds the logOut methods
   * @param {*} props 
   */
  constructor(props) {
    super(props)
    this.state= {
      isAuthenticated: true
    }
    this.logOut = this.logOut.bind(this);
  }

  /**
   * The logout method initialize the signing out of
   * the user and also set the state
   */
  logOut() {
    if (this.state.isAuthenticated) {
      Auth.logOut();
      this.setState({
        isAuthenticated: false
      })
      //history.push('/');
    }
  }

  /**
   * This method renders output as HTML using JSX.
   * It renders the navigation bar
   * @return {void}
   */
  render() {
    const {authenticate, displayName} = this.props;
    return (
      <nav className="navbar navbar-fixed-top navbar-default ">
        <div className="container">
          <div className="navbar-header">
            <button 
              type="button" 
              className="navbar-toggle collapsed" 
              data-toggle="collapse" 
              data-target="#bs-example-navbar-collapse-1" 
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand">NewsFlash</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              {!authenticate 
              ? <li>
                <NavLink exact activeClassName="active" to="/">
                    Home
                  </NavLink>
              </li>
                : <li>
                  <NavLink activeClassName="active" to="/newsfeeds">
                    NewsFeeds
                  </NavLink>
                </li>
              }
            </ul>
            <ul className="nav navbar-nav navbar-right">
              {authenticate &&
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a>{displayName}</a>
                  </li>
                  <li>
                    <a id="log-out" href="" onClick={this.logOut}>LogOut</a>
                  </li>
                </ul>
              }
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;

Nav.PropTypes = {
  authenticate: PropTypes.bool.isRequired,
  displayName: PropTypes.string.required
}
