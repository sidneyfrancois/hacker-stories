import * as React from "react";
import Item from "./Item";

function List(props) {
  return (
    <ul>
      {props.list.map((item) => {
        return <Item key={item.objectID} item={item} />;
      })}
    </ul>
  );
}

export default List;
