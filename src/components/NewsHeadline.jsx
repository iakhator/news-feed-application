import React from 'react';
import PropTypes from 'prop-types';
import * as NewsActions from '../actions/NewsActions';
import ArticlesStore from '../stores/ArticlesStore';
import Headline from './Headline';
import Loader from './Loader';

/**
 * The parent component of Headline
 * @class NewsHeadline
 * @extends {React.Component}
 */
class NewsHeadline extends React.Component {

  /**
   * Creates an instance of NewsHeadline.
   * Initialize state
   * @memberof NewsHeadline
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      newsArticles: null
    };
    this.getNewsArticles = this.getNewsArticles.bind(this);
  }

  /**
   * The componentDidMount triggers the action.
   * takes in parameter of sourceId and sortBy.
   * @param {string} sourceId - The sources id.
   * @param {string} sortBy - The sources sortBysAvailable
   * @memberof NewsHeadline
   */
  componentDidMount() {
    NewsActions.getArticles(this.props.match.params.sourceId,
    this.props.match.params.sortBy);
    this.onRecieveChange();
  }

  /**
   * Takes in the next value recieved.
   * Make an action and Update the dom
   * @param {string} nextProps
   * @memberof NewsHeadline
   */
  componentWillReceiveProps(nextProps) {
    NewsActions.getArticles(nextProps.match.params.sourceId,
    nextProps.match.params.sortBy);
  }

  /**
   * Cleans the dom.
   * Protect memory leak.
   * @memberof NewsHeadline
   */
  componentWillUnmount() {
    ArticlesStore.removeListener('change', this.getNewsArticles);
  }

  /**
   * listens for change coming from the store.
   * @memberof NewsHeadline
   */
  onRecieveChange() {
    ArticlesStore.on('change', this.getNewsArticles);
  }

  /**
   * setState after change in store to the newsArticle.
   * @memberof NewsHeadline
   */
  getNewsArticles() {
    this.setState({
      newsArticles: ArticlesStore.getArticles(),
    });
  }

  /**
   * Renders the articles and the child component.
   * @returns {void}
   * @memberof NewsHeadline
   */
  render() {
    return (
      <div className="body">
        <div className="container">
          <div className="single-source">
            {!this.state.newsArticles
              ? <Loader />
              : <Headline
                newsArticle={this.state.newsArticles}
                sourceId={this.props.match.params.sourceId}
                sortBy={this.props.match.params.sortBy}
              />
            }
          </div>
        </div>
      </div>
    );
  }
}

NewsHeadline.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
  sourceId: PropTypes.string,
  sortBy: PropTypes.string
};

NewsHeadline.defaultProps = {
  match: { source: 'name' },
  params: { article: 'cnn' },
  sourceId: 'cnn',
  sortBy: 'top'
};
export default NewsHeadline;
