import React from 'react';
import Sources from './Sources';
import * as NewsActions from '../actions/NewsActions';
import NewsStore from '../stores/NewsStore';

/**
 *The newsfeeds component renders the api sources
 * @class News
 * @extends {React.Component}
 */
class NewsFeeds extends React.Component {

  /**
   * Creates an instance of NewsFeeds.
   * bind methods and set initial state.
   * @memberof NewsFeeds
   */
  constructor() {
    super();
    this.state = {
      newsSource: null,
      errorMessage: NewsStore.getError(),
      search: '',
      isAuthenticated: false
    };
    this.recieveSources = this.recieveSources.bind(this);
    this.recieveError = this.recieveError.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

/**
 * The componentDidMount triggers the action
 * immediately the render method is executed
 * @memberof NewsFeeds
 */
  componentDidMount() {
    NewsActions.recieveSources();
    this.onRecieveChange();
  }

/**
 * This method gets called to clean up the dom
 * @memberof NewsFeeds
 */
  componentWillUnmount() {
    NewsStore.removeListener('change', this.recieveSources);
    NewsStore.removeListener('change', this.recieveError);
  }

/**
 * The onRecieveChange listens for change
 * in the store
 * @memberof NewsFeeds
 */
  onRecieveChange() {
    NewsStore.on('change', this.recieveSources);
    NewsStore.on('change', this.recieveError);
  }

/**
 * The method uses the react controlled component
 * to update the inputted value.
 * @param {string} event
 * @memberof NewsFeeds
 */
  onSearch(event) {
    this.setState({
      search: event.target.value
    });
  }

/**
 * Update the initial newsSource to
 * sources coming from the store.
 * @memberof NewsFeeds
 */
  recieveSources() {
    this.setState({
      newsSource: NewsStore.getSources()
    });
  }

  /**
   *Re-Update error message
   * @memberof NewsFeeds
   */
  recieveError() {
    this.setState({
      errorMessage: NewsStore.getError()
    });
  }

/**
 * Returns newsSource and search input
 * @returns {String|Array} newsSource and search
 * @memberof NewsFeeds
 */
  render() {
    return (
      <div className="source-body">
        <div className="container contain">
          {this.state.errorMessage ?
            <p className="error">OOPs an error occured</p> :
            <div className="row">
              <div className="col-md-10 col-md-offset-1">
                <p className="news-source text-center ">
                  <i className="fa fa-newspaper-o fa-2x" aria-hidden="true" />
                  <span>Welcome to NewsFlash</span></p>
                <div className="page-header col-md-10 col-md-offset-1">
                  <input
                    className="form-control"
                    placeholder="Search for your favourite news sources on the go..."
                    type="text"
                    value={this.state.search}
                    onChange={this.onSearch}
                  />
                </div>
                {!this.state.newsSource ? <div className="load">
                Loading <i
                className="fa fa-spinner fa-spin"
                style={{ fontSize: 24 }} /></div> :
                <div>
                  <Sources
                      newsSource={this.state.newsSource}
                      search={this.state.search}
                    />
                </div>
                }
              </div>
            </div>
           }
        </div>
      </div>
    );
  }
}

export default NewsFeeds;
