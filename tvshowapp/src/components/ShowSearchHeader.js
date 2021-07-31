import React from 'react';
import logo from '../Show-Search-Icon.svg'

function ShowSearchHeader({ lastSearch }) {
  return (
    <header>
      <div className="brand">
        <img src={logo} alt="Show Searcher" />
        <h1>Search for a Show</h1>
      </div>    
      <p className="muted">
        Showing results for <strong>{lastSearch}</strong>
      </p>
    </header>
  );
}
export default ShowSearchHeader;