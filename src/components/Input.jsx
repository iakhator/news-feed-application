import React from 'react';

/**
 * Render an input field of text
 * @returns {inputField}
 */
function Input(props) {
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

export default Input;
