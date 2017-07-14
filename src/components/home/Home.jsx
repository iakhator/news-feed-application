import React from 'react';
import Auth from '../../helpers/auth';

/**
 * The Starting page of the app
 * @class Home
 * @extends {React.Component}
 */
class Home extends React.Component {

  /**
   * Creates an instance of Home.
   * @memberof Home
   */
  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
      user: ''
    };
    this.login = this.login.bind(this);
  }

  /**
   * Authenticate the user before entering the app.
   * @function login
   * @memberof Home
   * @return {void}
   */
  login() {
    Auth.logIn().then((user) => {
      this.setState({
        isAuthenticated: true,
        user
      });
    });
  }

/**
 * Renders the home page
 * @returns {void}
 * @memberof Home
 */
  render() {
    return (
      <div className="home-page">
        <div className="col-md-8 col-md-offset-2">
          <div className="jumbotron">
            <h2>
              <i className="fa fa-rss rss" aria-hidden="true" />
              <div>News Flash </div>
            </h2>
            <p>News Flash, Get the latest news around the globe here </p>
            <div>
              <button
                onClick={this.login}
                className="login"
              ><i
                className="fa fa-google-plus" aria-hidden="true" />
                  Login With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
