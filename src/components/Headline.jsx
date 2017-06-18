import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * The Headline function is a stateless function
 * That displays the required article based on the sort value
 * @param {*} props 
 */
function Headline(props) {
  const {newsArticle} = props;
  return (
    <div>
      {newsArticle.map((article) => {
        return (
          <div className="single" key={article.title}>
            <h3 className="page-header">
              <Link to={article.url} target="_blank">
                {article.title}
              </Link>
            </h3>
            <img className="img-responsive page-header" src={article.urlToImage} alt="" />
            <div>
              <p className="description">
                <i className="fa fa-newspaper-o " aria-hidden="true" /> {article.description}...
                <Link className="see-more" to={article.url} target="_blank"> See more</Link>
              </p>
              <div className="article-details">
                <p className="pull-right">
                  <i className="fa fa-clock-o" aria-hidden="true" />
                  {article.publishedAt}
                </p>
                <p className="pull-left">
                  <i className="fa fa-user" aria-hidden="true" /> {article.author}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

Headline.PropTypes = {
  newsArticle: PropTypes.array.isRequired,
};

export default Headline;