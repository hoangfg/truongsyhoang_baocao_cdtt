import React from "react";
import WishShare from "./WishShare";

export default function AddToCart() {
  return (
    <div className="actions">
      <div className="qty-control flexitem">
        <button className="minus circle">-</button>
        <input type="text" name id defaultValue={1} />
        <button className="plus circle">+</button>
      </div>
      <div className="button-cart">
        <button className="primary-button">Add to Cart</button>
      </div>
      <WishShare />
    </div>
  );
}
