import React from 'react';
import PropTypes from 'prop-types';

/**
 * Render an input field of text
 * @returns {inputField} search field
 * @param {object} props: params passed from NewsFeed
 */
function SearchField(props) {
  const { search, onSearch } = props;
  return (
    <input
      className="form-control"
      placeholder="Search for your favourite news sources on the go..."
      type="text"
      value={search}
      onChange={onSearch}
    />
  );
}


SearchField.propTypes = {
  search: PropTypes.string,
  onSearch: PropTypes.func
};


export default SearchField;
