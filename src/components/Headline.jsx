import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SortBy from './SortBy';

/**
 * Renders the articles from the news api
 * @param {Array} props: data passed from Newsheadline
 * @returns {void}
 */
function Headline(props) {
  const { newsArticle, sourceId, sortBy } = props;
  return (
    <div>
      <div className="sort-header sort-fixed affix">
        <SortBy sourceId={sourceId} />
        <h2 className="article-title">
          {sortBy.toUpperCase()} {sourceId.replace(/-/g, ' ').toUpperCase()}{' '}
          NEWS
        </h2>
      </div>
      {newsArticle.map(article => (
        <div className="articles" key={article.title}>
          <div className="row single">
            <div className="col-md-4">
              <img className="img-responsive" src={article.urlToImage} alt="" />
            </div>
            <div className="col-md-8">
              <h3 className="page-header">
                <Link to={article.url} target="_blank">
                  {article.title}
                </Link>
              </h3>
              <div>
                <p className="description page-header">
                  <i className="fa fa-newspaper-o" aria-hidden="true" />{' '}
                  {article.description}...
                </p>
                <p className="pull-left publish-time">
                  <i className="fa fa-clock-o" aria-hidden="true" />
                  {article.publishedAt}
                </p>
                <a
                  className="btn btn-sm see-more pull-right"
                  href={article.url}
                  target="_blank"
                >
                  See more yes
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

Headline.propTypes = {
  newsArticle: PropTypes.array.isRequired,
  sourceId: PropTypes.string.isRequired,
  sortBy: PropTypes.string.isRequired
};

export default Headline;
