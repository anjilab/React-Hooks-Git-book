import React, { useEffect, useState } from "react";
import "./style.css";

export default function MemoList({ getListItem }) {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    console.log("---here--child component rerendered-");
    setListItems(getListItem);
  }, [getListItem]);

  return (
    <div>
      {listItems.map(item => (
        <ul>
          <li>{item}</li>
        </ul>
      ))}
    </div>
  );
}
