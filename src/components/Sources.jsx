import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * A child component of Newsfeeds component.
 * @param {string} props passed param from NewsFee
 * @returns {void}
 */
function Sources(props) {
  const { search, newsSource } = props;
  const filterSource = newsSource.filter(
    sources => (sources.name.toLowerCase().indexOf(search.toLowerCase()) >= 0)
  );

  /**
   * renders the sources to the dom.
   */
  return (
    <div className="row list">
      <div className="col-md-10 col-md-offset-1">
        <div className="newsfeed">
          {filterSource.length === 0 ?
            <div className="no-match text-center">
              Oops, No Result match your search query.
            </div> :
            filterSource.map(sources => (
              <div className="news-sources" key={sources.id}>
                <h3 className="page-header">{sources.name}</h3>
                <ul className="desc">
                  <li>
                    <i className="fa fa-star" aria-hidden="true" />
                    {sources.description}
                  </li>
                </ul>
                {sources.sortBysAvailable.map(sortBy => (
                  <div key={sortBy}>
                    <ul className="sort pull-right">
                      <li>
                        <Link
                          className="btn btn-sm"
                          to={`/newsfeeds/${sources.id}/${sortBy}`}>
                          See {sortBy} news
                        </Link>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Sources.propTypes = {
  newsSource: PropTypes.array.isRequired,
  search: PropTypes.string.isRequired
};

export default Sources;
