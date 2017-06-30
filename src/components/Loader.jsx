import React from 'react';

/**
 * Spinner when page is waiting to laod
 * @returns {void}
 */
function Loader() {
  return (
    <div className="load">
      Loading <i
      className="fa fa-spinner fa-spin"
      style={{ fontSize: 24 }} />
    </div>
  );
}

export default Loader;
