import React from "react";

export default function Information() {
  return (
    <li className="has-child expand">
      <a href="#0" className="icon-small">
        Information
      </a>
      <ul className="content">
        <li>
          <span>Brands</span> <span>Nike</span>
        </li>
        <li>
          <span>Activity</span> <span>Running</span>
        </li>
        <li>
          <span>Meterial</span> <span>Fleece</span>
        </li>
        <li>
          <span>Gender</span> <span>Men</span>
        </li>
      </ul>
    </li>
  );
}
