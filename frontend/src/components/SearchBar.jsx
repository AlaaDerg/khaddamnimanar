import React from 'react';
import './SearchBar.css';

function SearchBar( props) {
  return (
    <div className="search-bar">
      <input type="text" placeholder={props.placeholder} />
      <button>
        <img src='./searchicon.png' alt='Search' />
      </button>
    </div>
  );
}

export default SearchBar;