import React from "react";

export default function SideBarItem({ name, checked, onChange, checkId }) {
  return (
    <li>
      <input
        id={checkId}
        type="checkbox"
        name="name"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={checkId}>
        <span className="checked" />
        <span>{name}</span>
      </label>
      {/* <span className="count">{item.count}</span> */}
    </li>
  );
}
