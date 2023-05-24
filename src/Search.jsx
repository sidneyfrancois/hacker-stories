import * as React from "react";

function Search() {
  const handleChange = () => {
    console.log(event);
    console.log(event.target.value);
  };

  return (
    <>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
    </>
  );
}

export default Search;
