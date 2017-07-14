import React from 'react';

const date = new Date();
const year = date.getFullYear();

/**
 * Renders the footer
 * @returns {void}
 */
function Footer() {
  return (
    <footer className="footer navbar-default navbar-fixed">
      <div className="container">
        <p className="text-muted text-center">
          &copy;{year}, Made By Itua Akhator
        </p>
      </div>
    </footer>
  );
}

export default Footer;
