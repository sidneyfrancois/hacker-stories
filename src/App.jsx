import * as React from "react";
import List from "./List";
import Search from "./Search";

function App() {
  return (
    <>
      <h1>My Hacker Stories</h1>

      <Search />

      <hr />

      <List />
    </>
  );
}

export default App;
