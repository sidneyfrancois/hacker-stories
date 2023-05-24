import * as React from "react";

function App() {
  const title = "React";

  const welcome = {
    greeting: "Hey",
    title: "React",
  };

  function getTitle() {
    return title;
  }

  return (
    <>
      <h1>Hello {title}</h1>

      <h2>{getTitle()}</h2>
      <h3>
        {welcome.greeting}, {welcome.title}
      </h3>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </>
  );
}

export default App;
