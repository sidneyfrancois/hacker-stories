import * as React from "react";
import List from "./List";
import Search from "./Search";

function App() {
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  return (
    <>
      <h1>My Hacker Stories</h1>

      <Search />

      <hr />

      <List list={stories} />
    </>
  );
}

export default App;
