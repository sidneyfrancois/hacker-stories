import * as React from "react";
import Item from "./Item";

function List({ stories, onRemoveItem }) {
  return (
    <ul>
      {stories.map((item) => {
        return (
          <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
        );
      })}
    </ul>
  );
}

export default List;
