import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NewsStore from '../stores/NewsStore';

/**
 * Get sortBysAvailabe
 * @class SortBy
 * @extends {React.Component}
 */
class SortBy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBysAvailable: []
    };
  }

  componentWillMount() {
    NewsStore.getNewsSources().then((result) => {
      this.setState({
        sortBysAvailable: result.data.sources
        .filter(source => (source.id === this.props.sourceId)),
      });
    });
  }

  /**
   * Renders latest and top button respectively.
   * @returns {void}
   * @memberof SortBy
   */
  render() {
    let sortBysAvailable;
    let sortNews;
    if (this.state.sortBysAvailable[0]) {
      sortBysAvailable = this.state.sortBysAvailable[0].sortBysAvailable;
      sortNews = sortBysAvailable.map(sortBy => (
        <li key={sortBy}>
          <Link
            className="btn sortBys btn-sm"
            to={`/newsfeeds/${this.props
              .sourceId}/${sortBy}`}
          >{sortBy.toUpperCase()} NEWS</Link>
        </li>
      ));
    }
    return (
      <div>
        <ul className="sort pull-left">
          {sortNews}
        </ul>
      </div>);
  }


}

SortBy.propTypes = {
  sourceId: PropTypes.string
};

export default SortBy;
