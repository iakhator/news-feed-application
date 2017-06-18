import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

function Sources(props) {
  const { search, newsSource } = props;
  return (
    <div className="row">
      <div className="col-md-10 col-md-offset-1">
        <div className="newsfeed">
          {newsSource
            .filter(
            (sources) => {
              return sources.name.toLowerCase().indexOf(search.toLowerCase()) >= 0;
            }).map(sources => (
              <div className="news-sources" key={sources.id}>
                <h3 className="page-header">{sources.name}</h3>
                <ul className="desc">
                  <li>
                    <i className="fa fa-star" aria-hidden="true" />
                    {sources.description}
                  </li>
                </ul>
                {sources.sortBysAvailable.map((sortBy) => {
                  return(
                    <div key={sortBy}>
                      <ul className="sort pull-right">
                        <li>
                          <Link to={`/newsfeeds/${sources.id}/${sortBy}`}>{sortBy}</Link>
                        </li>
                      </ul>
                    </div>
                  )
                })}
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Sources.PropTypes = {
  newsSource: PropTypes.array.isRequired,
  search: PropTypes.string.isRequired
}

export default Sources;