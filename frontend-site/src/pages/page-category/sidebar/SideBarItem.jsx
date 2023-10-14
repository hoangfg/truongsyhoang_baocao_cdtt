import React from "react";

export default function SideBarItem() {
  return (
    <li>
      <input type="checkbox" name="checkbox" id="beauty" />
      <label htmlFor="beauty">
        <span className="checked" />
        <span>Beauty</span>
      </label>
      <span className="count">2</span>
    </li>
  );
}
