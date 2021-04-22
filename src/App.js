import React, { useState, useCallback, useMemo } from "react";
import "./style.css";
import List from "./List.js";
import MemoList from "./MemoList.js";

export default function App() {
  const [number, setNumber] = useState(0);
  const [toggleState, setToggleState] = useState(true);

  const changeToggle = () => {
    setToggleState(toggleState => {
      return !toggleState;
    });
  };

  const getDoubledItem = useCallback(
    incrementBy => {
      return [
        number + incrementBy,
        number + 2 + incrementBy,
        number + 4 + incrementBy
      ];
    },
    [number]
  );

  const getDoubledItemMemo = useMemo(() => {
    return [number, number + 2, number + 4];
  }, [number]);

  return (
    <div>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={changeToggle}> Toggle me </button>
      {toggleState && <p>Toggle on </p>}
      <p>
        <input onChange={e => setNumber(+e.target.value)} />{" "}
      </p>
      <List getListItem={getDoubledItem} />
      <p>DIfference between Usememo and useCallback</p>
      <MemoList getListItem={getDoubledItemMemo} />
    </div>
  );
}
