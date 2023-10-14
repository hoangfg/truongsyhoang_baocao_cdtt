import React from "react";
import { Link } from "react-router-dom";
import SubMenu from "./SubMenu";

export default function Menu() {
  return (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li className="has-child">
        <Link to="/product">
          Shop
          <div className="icon-small">
            <i className="ri-arrow-down-s-line" />
          </div>
        </Link>
        <SubMenu />
      </li>
    </>
  );
}
