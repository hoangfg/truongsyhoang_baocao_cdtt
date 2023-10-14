import React from "react";

export default function WishShare() {
  return (
    <div className="wish-share">
      <ul className="flexitem secound-links">
        <li>
          <a href="#">
            <span className="icon-large">
              <i className="ri-heart-line" />
            </span>
            <span>WishList</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon-large">
              <i className="ri-share-line" />
            </span>
            <span>Share</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
