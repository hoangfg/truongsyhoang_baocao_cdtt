import React from "react";
import CheckoutInfo from "./CheckoutInfo";
import CheckoutProduct from "./CheckoutProduct";

export default function CheckOut() {
  return (
    <div className="single-checkout">
      <div className="container">
        <div className="wrapper">
          <div className="breadcrumb">
            <ul className="flexitem">
              <li>
                <a href="#">Home</a>
              </li>
              <li>Checkout</li>
            </ul>
          </div>
          <div className="checkout flexwrap">
            <CheckoutInfo />
            <CheckoutProduct />
          </div>
        </div>
      </div>
    </div>
  );
}
