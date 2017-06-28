import React from 'react';
import PropTypes from 'prop-types';
import * as NewsActions from '../actions/NewsActions';
import ArtclesStore from '../stores/ArticlesStore';
import Headline from './Headline';

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
   */
  constructor() {
    super();
    this.state = {
      newsArticle: null
    };
    this.recieveArticle = this.recieveArticle.bind(this);
  }

  /**
   * The componentDidMount triggers the action.
   * takes in parameter of sourceId and sortBy.
   * @param {string} sourceId - The sources id.
   * @param {string} sortBy - The sources sortBysAvailable
   * @memberof NewsHeadline
   */
  componentDidMount() {
    NewsActions.getArticle(this.props.match.params.sourceId,
    this.props.match.params.sortBy);
    this.onRecieveChange();
  }

  /**
   * Cleans the dom.
   * Protect memory leak.
   * @memberof NewsHeadline
   */
  componentWillUnmount() {
    ArtclesStore.removeListener('change', this.recieveArticle);
  }

  /**
   * listens for change coming from the store.
   * @memberof NewsHeadline
   */
  onRecieveChange() {
    ArtclesStore.on('change', this.recieveArticle);
  }

  /**
   * setState after change in store to the newsArticle.
   * @memberof NewsHeadline
   */
  recieveArticle() {
    this.setState({
      newsArticle: ArtclesStore.getArticle(),
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
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="single-source">
                {!this.state.newsArticle
                  ? <p className="load ">
                    Loading <i
                    className="fa fa-spinner fa-spin"
                    style={{ fontSize: 24 }}
                    />
                  </p>
                  : <Headline
                    newsArticle={this.state.newsArticle}
                    sourceId={this.props.match.params.sourceId}
                    sortBy={this.props.match.params.sortBy}
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

NewsHeadline.PropTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
  sourceId: PropTypes.string,
  sortBy: PropTypes.string
};
export default NewsHeadline;
