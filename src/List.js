import React, { useEffect, useState } from "react";
import "./style.css";

export default function List({ getListItem }) {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    /* 
    every time rerender huda too much time liney function le returned gareko value or kunai function recreate nahosh bhanna ko lagi nai useCallback & useMemo are used */

    /* I WANT TO RERENDER THIS FUNCTION OR CHILD component
    when getListItem changes 
    before using useCallback in parent component App
    when toggleMe changed this was also executed, 
    but after using useCallback this wasn't rerendered
    */

    /* difference betwenn useMemo and useCallback is that useMemo 
    actually returns the function returned value but useCallback 
    returns the whole function so that getListItem() yesari call garna sakincha. tara useMemo garda function call not possible as it represents returned value of that memoized function
    since useCallback le function nai samjhine bhako le argument pass garna sajilo bhayo, tara memo le afu bhitra ko fucntion le reutrn gareko kura samjhine bhako le, function with argument or with furnction ko case ma useCallback
    */
    console.log("---here--child component rerendered-");
    setListItems(getListItem(5));
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
