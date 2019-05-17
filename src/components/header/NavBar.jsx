import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Auth from '../../helpers/auth';


/**
 * The Nav class displays the navigation in
 * all components
 * @class NavBar
 */
class NavBar extends React.Component {

  /**
   * Initalize state and bind the logOut methods
   * @constructor
   * @param {string|bolean} props
   * @memberof NavBar
   */
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: true
    };

    this.logOut = this.logOut.bind(this);
  }

   /**
   *Initialize the signing out of
   * the user and also set the state
   * @memberof NavBar
   */
  logOut() {
    if (this.state.isAuthenticated) {
      Auth.logOut();
      this.setState({
        isAuthenticated: false
      });
    }
  }
  /**
   * This method renders output as HTML using JSX.
   * It renders the navigation bar
   * @return {void}
   */
  render() {
    const { authenticate, displayName, onClick } = this.props;
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
            <NavLink
              exact
              activeClassName="active"
              className="navbar-brand" to="/">
              <i
                className="fa fa-rss rss-sm"
                aria-hidden="true"
              />
              NewsFlash
            </NavLink>
          </div>
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav">
              {authenticate && <li>
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

export default NavBar;

NavBar.propTypes = {
  authenticate: PropTypes.bool,
  displayName: PropTypes.string
};

NavBar.defaultProps = {
  authenticate: true,
  displayName: 'Itua'
};
