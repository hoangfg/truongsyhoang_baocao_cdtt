import React from "react";

export default function CheckoutItem() {
  return (
    <li className="item">
      <div className="thumbnail object-cover">
        <a href="#">
          <img src="assets/products/home1.jpg" alt />
        </a>
      </div>
      <div className="item-content">
        <p>
          <a href="#">Dimmable Ceiling Light Modern</a>
        </p>
        <span className="price">
          <span>1279.99</span>
          <span>
            {" "}
            <span>2x</span>
          </span>
        </span>
      </div>
      <a href="#" className="item-remove">
        <i className="ri-close-line" />
      </a>
    </li>
  );
}
