import React from "react";
import CheckoutItem from "./CheckoutItem";

export default function CheckoutProduct() {
  return (
    <div className="item right">
      <h2>Order Summary</h2>
      <div className="summary-order is_sticky">
        <div className="summary-totals">
          <ul>
            <li>
              <span>Subtotal</span>
              <span>$2155.95</span>
            </li>
            <li>
              <span>Discount</span>
              <span>$100.00</span>
            </li>
            <li>
              <span>Shipping Flat</span>
              <span>$10.00</span>
            </li>
            <li>
              <span>Total</span>
              <strong>$2065.95</strong>
            </li>
          </ul>
          <ul className="products mini">
            <CheckoutItem />
          </ul>
        </div>
      </div>
    </div>
  );
}
