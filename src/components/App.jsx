import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from './home/Home';
import NewsFeeds from './NewsFeeds';
import NavBar from './header/NavBar';
import NewsHeadline from './NewsHeadline';
import Footer from './Footer';
import NotFound from './NotFound';
import { firebaseAuth } from '../config/firebase-config';

/**
 * Proctected private Route
 * @params {object} { component: Component, isAuthenticated, ...rest }
 * @returns {component} protected route
 */
function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

/**
 * Proctected public Route
 * @params {object} { component: Component, isAuthenticated, ...rest }
 * @returns {component} public route
 */
function PublicRoute({ component: Component, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated === false ? (
          <Component {...props} />
        ) : (
          <Redirect to="/newsfeeds" />
        )
      }
    />
  );
}

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

/**
 * The component maintains all routes.
 * Checks for user signed in and signed out
 * @class App
 * @extends {React.Component}
 */
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: true,
      displayName: ''
    };
  }

  /**
   * Checks for user signin or signout
   * set the state
   * @memberof App
   * @return {string|bolean} displayName, isAuthenticated
   */
  componentDidMount() {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          isAuthenticated: true,
          displayName: user.displayName
        });
      } else {
        this.setState({
          isAuthenticated: false,
          displayName: ''
        });
      }
    });
  }

  /**
   * Renders the routes
   * @returns {void}
   * @memberof App
   */
  render() {
    return (
      <Router>
        <div>
          <NavBar
            authenticate={this.state.isAuthenticated}
            displayName={this.state.displayName}
          />
          <Switch>
            <PublicRoute
              isAuthenticated={this.state.isAuthenticated}
              exact
              path="/"
              component={Home}
            />
            <PrivateRoute
              isAuthenticated={this.state.isAuthenticated}
              exact
              path="/newsfeeds"
              component={NewsFeeds}
            />
            <PrivateRoute
              isAuthenticated={this.state.isAuthenticated}
              exact
              path="/newsfeeds/:sourceId/:sortBy"
              component={NewsHeadline}
            />
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
