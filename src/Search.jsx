import { useState } from "react";

function Search({ onSearch, term }) {
  const handleChange = (event) => {
    onSearch(event);
  };

  return (
    <>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
      <p>
        The search term is: <strong>{term}</strong>
      </p>
    </>
  );
}

export default Search;
