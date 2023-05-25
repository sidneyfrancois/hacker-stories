import List from "./List";
import InputWithLabel from "./InputWithLabel";
import useStorageState from "./Hooks/UseStorageState";
import { useState } from "react";

const initialStories = [
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

function App() {
  const [searchTerm, setSearchTerm] = useStorageState("search", "");
  const [stories, setStories] = useState(initialStories);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRemoveStory = (item) => {
    const newStories = stories.filter(
      (story) => item.objectID !== story.objectID
    );

    setStories(newStories);
  };

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h1>My Hacker Stories</h1>

      <InputWithLabel
        id="search"
        value={searchTerm}
        type="text"
        onInputChange={handleSearch}
        children
        isFocused
      >
        <strong>Search:</strong>
      </InputWithLabel>

      <hr />

      <List stories={searchedStories} onRemoveItem={handleRemoveStory} />
    </>
  );
}

export default App;
