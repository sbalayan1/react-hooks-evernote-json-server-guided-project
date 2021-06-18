import React from "react";

function Search({ handleFilter }) {
    let handleChange = (e) => {
        handleFilter(e.target.value)
    }

    return (
        <div className="filter">
            <input id="search-bar" type="text" placeholder="Search Notes" onChange={handleChange}/>
        </div>
  );
}

export default Search;
