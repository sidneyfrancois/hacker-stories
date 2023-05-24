import * as React from "react";
import Item from "./Item";

function List({ stories }) {
  return (
    <ul>
      {stories.map(({ objectID, ...item }) => {
        return <Item key={objectID} {...item} />;
      })}
    </ul>
  );
}

export default List;
