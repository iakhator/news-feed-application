import React from 'react';
import Sources from './Sources';
import * as NewsActions from '../actions/NewsActions';
import NewsStore from '../stores/NewsStore';
import SearchField from './SearchField';
import Loader from './Loader';

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
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      newsSource: null,
      errorMessage: NewsStore.getError(),
      search: '',
      isAuthenticated: false
    };
    this.getNewsSources = this.getNewsSources.bind(this);
    this.getNewsError = this.getNewsError.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

/**
 * The componentDidMount triggers the action
 * immediately the render method is executed
 * @memberof NewsFeeds
 * @returns {void}
 */
  componentDidMount() {
    NewsActions.getSources();
    this.onRecieveChange();
  }

/**
 * This method gets called to clean up the dom
 * @memberof NewsFeeds
 * @returns {void}
 */
  componentWillUnmount() {
    NewsStore.removeListener('change', this.getNewsSources);
    NewsStore.removeListener('change', this.getNewsError);
  }

/**
 * The onRecieveChange listens for change
 * in the store
 * @memberof NewsFeeds
 * @returns {void}
 */
  onRecieveChange() {
    NewsStore.on('change', this.getNewsSources);
    NewsStore.on('change', this.getNewsError);
  }

/**
 * The method uses the react controlled component
 * to update the inputted value.
 * @param {string} event value passed through
 * @memberof NewsFeeds
 * @returns {void}
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
 * @returns {void}
 */
  getNewsSources() {
    this.setState({
      newsSource: NewsStore.getSources()
    });
  }

  /**
   *Re-Update error message
   * @memberof NewsFeeds
   * @returns {void}
   */
  getNewsError() {
    this.setState({
      errorMessage: NewsStore.getError()
    });
  }

/**
 * Returns newsSource and search input.
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
                <div className="input-fixed affix">
                  <p className="news-source text-center ">
                    <i className="fa fa-newspaper-o fa-2x" aria-hidden="true" />
                    <span>Welcome to NewsFlash</span>
                  </p>
                  <div className="page-header col-md-10 col-md-offset-1">
                    <SearchField
                      search={this.state.search}
                      onSearch={this.onSearch}
                    />
                  </div>
                </div>
                {!this.state.newsSource ? <Loader /> :
                <div className="list">
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
