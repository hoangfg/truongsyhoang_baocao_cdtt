import React from "react";
import { Link } from "react-router-dom";

export default function ChildSubMenu(props) {
  const childSub = props.filterSubmenu;
  return (
    <>
      {childSub.map((item) => (
        <li>
          <Link to={`/${item?.link}`}>{item.name}</Link>
        </li>
      ))}
    </>
  );
}
