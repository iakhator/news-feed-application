import React from 'react';

/**
 * return a not found page
 * @returns {void}
 */
function NotFound() {
  return (
    <div className="not-found">
      <div className="frown">
        <i className="fa fa-frown-o" aria-hidden="true" />
      </div>
      <div className="four">404</div>
      <div className="four-text">
        <h1>Oops, we couldn't find that page!</h1>
        <p>It looks like nothing was found at this Location</p>
      </div>
    </div>
  );
}

export default NotFound;
