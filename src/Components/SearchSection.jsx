import React from "react";

function Search() {
  return (
    <div className="search">
      <input type="text" placeholder="Search for your destination" />
      <button>
        <i className="bx bx-search-alt-2"></i>
      </button>
    </div>
  );
}
export default Search;